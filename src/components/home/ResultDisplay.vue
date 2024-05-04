<script setup lang="ts">
import { IconBackspace, IconCheck } from '@iconify-prerendered/vue-material-symbols';
import { computed, onMounted, ref } from 'vue';
import { useGradesStore } from '@/stores/grades';
import { useToastStore } from '@/stores/toast';
import ActionButton from '../common/ActionButton.vue';

const store = useGradesStore();
const toastStore = useToastStore();
const result = computed(() => {
  const resultRounded = `${store.average.toFixed(4)}`;
  return resultRounded.substring(0, resultRounded.length - 1);
});

const clearResult = () => {
  store.resetGrades();
  toastStore.showToast('Grades cleared', IconCheck());
};

// Change the styles of the result display when it snaps to top on scroll
const isStuck = ref(false);
const dynamicStyles = computed(() => {
  if (isStuck.value) {
    return 'from-orange-200';
  }

  return 'rounded-3xl inset-shadow from-orange-100';
});
onMounted(() => {
  const resultDisplay = document.getElementById('result-display');
  if (!resultDisplay) {
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      isStuck.value = entry.intersectionRatio < 1;
    },
    { threshold: [1] }
  );

  observer.observe(resultDisplay);
});
</script>

<template>
  <div id="result-display" class="sticky z-10 mb-12 w-full">
    <div
      :class="`${dynamicStyles} transition-all duration-300 flex justify-between p-8 items-center bg-gradient-to-b to-orange-300`"
    >
      <h1 class="numeric font-light text-6xl text-orange-800">{{ result }}</h1>

      <div class="flex flex-row-reverse gap-4">
        <ActionButton :icon="IconBackspace" color="orange" @click="clearResult" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.inset-shadow {
  box-shadow: 0px 7px 13.4px 1px rgba(194, 65, 12, 0.2) inset;
}
#result-display {
  top: -1px;
  padding-top: 1px;
}
</style>
