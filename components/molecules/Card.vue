<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <NuxtLink :to="`${id.params.id}`" class="cursor-pointer">
            <img class="rounded-t-lg max-h-[12rem] min-w-full object-cover" :src="image" alt="" />
        </NuxtLink>
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
            <NuxtLink :to="`/movies/${idMovie}`" class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Voir plus
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
var props = defineProps({
    image: String,
    title: String,
    description: String,
    urlMovie: String,
})
const { image, title, description, urlMovie } = toRefs(props);

const idMovie = urlMovie?.value;
console.log(idMovie.params.id);


</script>
