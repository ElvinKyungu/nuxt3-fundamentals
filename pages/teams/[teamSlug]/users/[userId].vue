<template>
    {{ message }}
</template>
<script setup>
    const route = useRoute();
    const message = computed(()=> `I'm on team ${route.params.teamSlug} user id${route.params.userId}`)
</script>