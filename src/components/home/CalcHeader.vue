<script setup lang="ts">
import { IconNewReleases, IconPersonOutline } from '@iconify-prerendered/vue-material-symbols';

defineProps<{
  currentTermName: string;
}>();
</script>

<template>
  <header class="px-8 pb-6">
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <h3>GWA Calc 2</h3>
        <div class="flex items-center gap-2">
          <p>{{ currentTermName }}</p>
          <IconNewReleases class="text-emerald-700 size-4" />
        </div>
      </div>

      <div class="flex flex-row-reverse items-center gap-4">
        <div
          class="overflow-hidden rounded-full size-12 bg-gray-200 flex justify-center items-center"
        >
          <IconPersonOutline class="size-7 text-gray-600" />
        </div>
      </div>
    </div>
  </header>
</template>
