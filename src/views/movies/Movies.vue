<template>
   <div class="container mx-auto w-full h-screen flex flex-col">
       <div class="w-full text-center p-10">
           <h1 class="text-6xl text-white font-extrabold font-">Top 100 movies</h1>
       </div>
       <div class="flex justify-center">
           <div>
                <input v-model="apiKey" class="mr-5 p-2 rounded-sm w-72" type="text" placeholder="API key"/>
                <button class="mx-auto my-10 p-2 rounded-sm bg-sky-400 hover:bg-sky-200 focus:bg-sky-200" type="submit" @click="getMovies">Hämta filmer</button>
           </div>
       </div>
       <div class="grid grid-cols-5 flex-grow pb-40">
           <div v-for="page in pages">
                <div v-for="movie in page.data">
                        <movieComponent :movie="movie"></movieComponent>
                </div>
           </div>
       </div>
       <div class="w-full font-light text-center pb-10 text-white">
           <p>
               All film-related metadata used in this application is supplied by <a class="text-sky-400 hover:text-sky-200 focus:text-sky-200" href="https://www.themoviedb.org/">The Movie Database (TMDb)</a>.
           </p>
       </div>
   </div>
   <div :style="{display: this.loading ? 'flex' : 'none'}" class="absolute flex justify-center items-center w-screen h-screen top-0 left-0 bg-cyan-600 bg-opacity-50 text-center">
            <div style="border-top-color:transparent" class="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
    </div>
</template>
<script src="./movies.view.ts"></script>
<style src="./movies.scss"></style>


