import moviesApi, {IMoviesInternal} from "../../api/moviesApi";
import { IApiResponse } from "../../api/baseApi";
import movieComponent from "../../components/movie/MovieComponent.vue";
import { defineComponent } from "vue";

var mApi = new moviesApi();

export default defineComponent({
    components: {
        movieComponent
    },
    data() {
        return {
            count: 0,
            apiKey: "",
            pages: [] as IApiResponse<IMoviesInternal>[],
            loading: false
        }
    },
    methods: {
        async getMovies() {
            if (this.apiKey.length < 32) {
                return;
            }

            this.loading = true;
            const respArr = await Promise.all([
                await mApi.getTopRated(1),
                await mApi.getTopRated(2),
                await mApi.getTopRated(3),
                await mApi.getTopRated(4),
                await mApi.getTopRated(5)
            ]) as IApiResponse<IMoviesInternal>[];
            this.loading = false;
            this.pages = respArr;
            // respArr.forEach(page => {
            //     if(page.success){
            //         this.movies = this.movies.concat(page.data as IMoviesInternal[]);
            //     }
            // });
        }
    },
    watch: {
        apiKey(newKey: string, oldKey: string) {
            mApi.setKey(newKey);
        }
    }
});