<script setup lang="ts">

</script>

<template>
  <header>
    <RouterLink :to="{ name: 'Home' }">Home | </RouterLink>
    <RouterLink :to="{ name: 'About' }">About | </RouterLink>
    <RouterLink :to="{ name: 'Terminal' }">Terminal | </RouterLink>
    <RouterLink :to="{ name: 'Admin' }">Admin</RouterLink>
    <hr>
  </header>
</template>