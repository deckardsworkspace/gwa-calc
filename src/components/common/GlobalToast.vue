<script setup lang="ts">
import { useToastStore } from '@/stores/toast';
import { computed } from 'vue';

const store = useToastStore();
const message = computed(() => store.message);
const icon = computed(() => store.icon);
const visibleStyle = computed(() => (store.isVisible ? 'translate-y-5' : '-translate-y-40'));
</script>

<template>
  <div
    :class="`${visibleStyle} absolute top-0 left-1/2 -translate-x-1/2 transition-transform ease-in-out duration-500 shadow-lg flex flex-row gap-2 items-center justify-center bg-white border border-gray-100 rounded-3xl p-4`"
  >
    <component :is="icon" class="size-6 text-gray-500" />
    <p class="text-base font-semibold">{{ message }}</p>
  </div>
</template>
