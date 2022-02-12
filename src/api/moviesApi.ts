import baseApi, { IApiResponse } from "./baseApi";

export interface IMoviesInternal {
    title:string,
    imageUrl: string
}

export default class moviesApi extends baseApi {
    //TO-DO: A bit to specific
    private _apiUrl = (e: string, page?: number) => `https://api.themoviedb.org/3/movie/${e}?api_key=${this._apiKey}&language=en-US&page=${page ?? 1}`;
    private _imageBaseStr = "https://image.tmdb.org/t/p/w500";

    async getTopRated(page?: number): Promise<IApiResponse<IMoviesInternal>> {
        var response = await this.get<any>(this._apiUrl("top_rated", page));
        if(response.success){
            var data = response.data as any;
            const apiMovies = data.results.map((movie:any) => {
                return {
                    title: movie.title,
                    imageUrl: this._imageBaseStr + movie.poster_path
                } as IMoviesInternal;
            });
            response.data = apiMovies;
        }
        return response as IApiResponse<IMoviesInternal>;
    }

}