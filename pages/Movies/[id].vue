<template>
    {{ message }}
</template>

<script setup>
    const route = useRoute();
    const message = computed(() => `user id ${route.params.idMovie}`);
    console.log(message.value);
</script>
