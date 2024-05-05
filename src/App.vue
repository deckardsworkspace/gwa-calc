<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalToast from './components/common/GlobalToast.vue';
</script>

<template>
  <main class="bg-gray-50 min-h-screen">
    <div class="fixed z-50 top-0 left-0 w-full h-4">
      <GlobalToast />
    </div>

    <RouterView />
  </main>
</template>
