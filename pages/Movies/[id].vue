<template>
    {{ message }}
</template>
<script setup>
    const route = useRoute();
    const message = computed(()=> ` user id${route.params.id}`)
    console.log(message.value);
</script>