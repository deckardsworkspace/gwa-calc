<script setup lang="ts">
import { IconAdd, IconRemove } from '@iconify-prerendered/vue-material-symbols';
import { computed } from 'vue';
import { useGradesStore } from '@/stores/grades';
import type { CoursePydantic } from '@/api';
import ActionButton from '../common/ActionButton.vue';

const props = defineProps<{
  course: CoursePydantic;
}>();
const { getGrade, setGrade } = useGradesStore();

const grade = computed(() => getGrade(props.course.id));
const gradingScale = props.course.gradePointScale;

const incrementGrade = () => {
  const currentIndex = gradingScale.indexOf(grade.value);
  let newIndex = gradingScale.length - 1;

  if (currentIndex != -1 && currentIndex < gradingScale.length - 1) {
    newIndex = currentIndex + 1;
  }

  setGrade(props.course.id, gradingScale[newIndex]);
};

const decrementGrade = () => {
  const currentIndex = gradingScale.indexOf(grade.value);
  let newIndex = 0;

  if (currentIndex > 0) {
    newIndex = currentIndex - 1;
  }

  setGrade(props.course.id, gradingScale[newIndex]);
};
</script>

<template>
  <tr class="px-8 py-6 flex flex-row justify-between items-center">
    <td class="w-1/2 flex flex-col">
      <h3 class="font-normal">{{ course.name }}</h3>
      <span>{{ course.units }} unit{{ course.units != 1 ? 's' : '' }}</span>
    </td>
    <td class="flex flex-row-reverse items-center gap-4">
      <ActionButton :icon="IconAdd" small round color="gray" @click="incrementGrade" />
      <ActionButton :icon="IconRemove" small round color="gray" @click="decrementGrade" />

      <span class="numeric text-3xl">{{ grade.toFixed(2) }}</span>
    </td>
  </tr>
</template>
