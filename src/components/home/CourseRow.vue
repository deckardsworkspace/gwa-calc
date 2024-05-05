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
  <tr
    class="p-4 md:px-8 md:py-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center"
  >
    <td class="flex flex-col md:w-1/2">
      <h3 class="font-semibold text-base md:font-normal md:text-2xl">{{ course.name }}</h3>
      <span>{{ course.units }} unit{{ course.units != 1 ? 's' : '' }}</span>
    </td>
    <td class="flex flex-row items-center gap-6 justify-between md:justify-start">
      <span class="numeric text-3xl">{{ grade.toFixed(2) }}</span>

      <div class="flex flex-row items-center gap-4">
        <ActionButton :icon="IconRemove" small round color="gray" @click="decrementGrade" />
        <ActionButton :icon="IconAdd" small round color="gray" @click="incrementGrade" />
      </div>
    </td>
  </tr>
</template>
