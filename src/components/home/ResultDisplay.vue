<script setup lang="ts">
import { IconBackspace } from '@iconify-prerendered/vue-material-symbols';
import { computed } from 'vue';
import { useGradesStore } from '@/stores/grades';
import ActionButton from '../common/ActionButton.vue';

const store = useGradesStore();
const result = computed(() => {
  const resultRounded = `${store.average.toFixed(4)}`;
  return resultRounded.substring(0, resultRounded.length - 1);
});

const clearResult = () => {
  store.resetGrades();
};
</script>

<template>
  <div
    class="inset-shadow w-full p-8 mb-12 sticky top-0 z-10 flex justify-between items-center bg-gradient-to-b from-orange-100 to-orange-300 rounded-3xl"
  >
    <h1 class="numeric font-light text-6xl text-orange-800">{{ result }}</h1>

    <div class="flex flex-row-reverse gap-4">
      <ActionButton :icon="IconBackspace" color="orange" @click="clearResult" />
    </div>
  </div>
</template>

<style scoped>
.inset-shadow {
  box-shadow: 0px 7px 13.4px 1px rgba(194, 65, 12, 0.2) inset;
}
</style>
