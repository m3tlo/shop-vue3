
<template>
  <div id="app">
    <MainLayout>
      <RouterView />
    </MainLayout>
  </div id="app">
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import MainLayout from '@/layouts/MainLayout.vue';

</script>

<style scoped>
</style>
