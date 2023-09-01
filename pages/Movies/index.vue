<script setup>
    const config = useRuntimeConfig()
    const search = ref('');
    const movies = ref([]);
    function truncateDescription(description) {
        if (description.length > 50) {
            return description.substring(0, 50) + '...';
        } else {
            return description;
        }
    }
    async function fetchMovies() {
        try {
            const response = await $fetch(`https://api.themoviedb.org/3/search/movie?api_key=${config.public.apiKey}&query=${search.value}`);
            movies.value = response.results;
            console.log(movies.value);
        } catch (error) {
            console.error(error);
        }
    }
</script>
<template>
    <div class="bg-gray-800">
        <MoleculesSearch @submit.prevent="fetchMovies">
            <input v-model.trim="search" placeholder="Entrer le nom du film" class="w-full p-4 rounded-full placeholder-gray-300   text-lg bg-transparent focus:outline-none text-white" type="text">
        </MoleculesSearch>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
            <MoleculesCard 
                v-for="(movie, index) in movies" :key="index"
                :image="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" 
                :title="movie.title" 
                :description="truncateDescription(movie.overview)"
                :idMovie="{name: 'movie-id', params:{id: movie.id}}"
            />
        </div>
    </div>
</template>
