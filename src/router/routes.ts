import { RouteRecordRaw } from "vue-router";
import Movies from "../views/movies/Movies.vue";

export default [
    {
        path: "/",
        component: Movies
    }
] as RouteRecordRaw[];