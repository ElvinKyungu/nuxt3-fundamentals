<template>
    {{ message }}
</template>

<script setup>
    const route = useRoute();
    console.log(route.params);
    const message = computed(() => `user id ${route.params.id}`);
    const fu = JSON.stringify(message)
    console.log(fu);
</script>
