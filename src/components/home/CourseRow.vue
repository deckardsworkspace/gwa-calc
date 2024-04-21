<script setup lang="ts">
import { IconAdd, IconRemove } from '@iconify-prerendered/vue-material-symbols';
import ActionButton from '../common/ActionButton.vue';

defineProps<{
  course: Course;
}>();
</script>

<template>
  <tr class="px-8 py-6 flex flex-row justify-between items-center">
    <td class="w-1/2 flex flex-col">
      <h3 class="font-normal">{{ course.name }}</h3>
      <span>{{ course.units }} unit{{ course.units != 1 && 's' }}</span>
    </td>
    <td class="flex flex-row-reverse items-center gap-4">
      <ActionButton :icon="IconAdd" small round color="gray" />
      <ActionButton :icon="IconRemove" small round color="gray" />

      <span class="numeric text-3xl">{{ course.value.toFixed(2) }}</span>
    </td>
  </tr>
</template>
