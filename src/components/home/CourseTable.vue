<script setup lang="ts">
import CourseRow from './CourseRow.vue';
import type { TermPydantic } from '@/api';
import { computed, reactive, watch } from 'vue';

const props = defineProps<{
  term: TermPydantic;
}>();

const term = reactive(props.term);

watch(
  () => props.term,
  (newTerm) => {
    Object.assign(term, newTerm);
  }
);

const courseGrades = reactive(Object.fromEntries(term.courses.map((course) => [course.id, 1.0])));

const onUpdate = (payload: { id: string; newGrade: number }) => {
  const { id, newGrade } = payload;
  courseGrades[id] = newGrade;
};

const courseUnits = Object.fromEntries(term.courses.map((course) => [course.id, course.units]));
const totalUnits = computed(() =>
  Object.values(courseUnits).reduce((acc, units) => acc + units, 0)
);
const weightedGrades = computed(() =>
  Object.entries(courseGrades).reduce((acc, [id, grade]) => acc + grade * courseUnits[id], 0)
);
const average = computed(() => weightedGrades.value / totalUnits.value);

const emit = defineEmits<{
  (e: 'recalculate', newResult: number): void;
}>();

watch(average, (newResult: number) => {
  emit('recalculate', newResult);
});
</script>

<template>
  <table class="w-full border border-gray-300 rounded-3xl border-separate">
    <tbody class="divide-y divide-gray-300">
      <CourseRow
        v-for="course in term.courses"
        :key="course.id"
        :course="course"
        :grade="courseGrades[course.id]"
        @update="onUpdate"
      />
    </tbody>
  </table>
</template>
