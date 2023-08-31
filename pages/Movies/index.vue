<script setup>
    const search = ref('');
    const movies = ref([]);
    async function fetchMovies() {
        try {
            const apiKey = '3aa00c66fc7233527cc0bc9fb5e1a5c1';
            const response = await $fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search.value}`);
            movies.value = response;
            console.log(movies.value);
        } catch (error) {
            console.error(error);
        }
    }
</script>
<template>
    <div class="">
        <MoleculesSearch @submit.prevent="fetchMovies">
            <input v-model="search" placeholder="Entrer le nom du film" class="w-full p-4 rounded-full placeholder-gray-600   text-lg bg-transparent focus:outline-none" type="text">
        </MoleculesSearch>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
            <MoleculesCard 
                image="https://picsum.photos/id/30/300/300" 
                title="Batman" 
                description="Un film assez cool"
            />
        </div>
    </div>
</template>
