<template>
  <h1>Hello world</h1>
</template>

<script lang="ts" setup>
    const client = userSupabaseClient();
    console.log(client);
    
</script>