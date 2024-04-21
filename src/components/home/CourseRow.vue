<script setup lang="ts">
import { IconAdd, IconRemove } from '@iconify-prerendered/vue-material-symbols';
import ActionButton from '../common/ActionButton.vue';
import type { CoursePydantic } from '@/api';
import { ref, watch } from 'vue';

const props = defineProps<{
  course: CoursePydantic;
  grade: number;
}>();

const emit = defineEmits<{
  (e: 'update', payload: { id: string; newGrade: number }): void;
}>();
const grade = ref(props.grade);

watch(
  () => props.grade,
  (newGrade) => {
    grade.value = newGrade;
  }
);

const gradingScale = props.course.gradePointScale;

const incrementGrade = () => {
  const currentIndex = gradingScale.indexOf(grade.value);
  let newIndex = gradingScale.length - 1;

  if (currentIndex != -1 && currentIndex < gradingScale.length - 1) {
    newIndex = currentIndex + 1;
  }

  emit('update', { id: props.course.id, newGrade: gradingScale[newIndex] });
};

const decrementGrade = () => {
  const currentIndex = gradingScale.indexOf(grade.value);
  let newIndex = 0;

  if (currentIndex > 0) {
    newIndex = currentIndex - 1;
  }

  emit('update', { id: props.course.id, newGrade: gradingScale[newIndex] });
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
