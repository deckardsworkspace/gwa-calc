<script setup lang="ts">
import CourseRow from './CourseRow.vue';
import { useGradesStore } from '@/stores/grades';

const store = useGradesStore();
const term = store.term;
</script>

<template>
  <table class="w-full border border-gray-300 rounded-3xl border-separate">
    <tbody class="divide-y divide-gray-300">
      <CourseRow v-for="course in term.courses" :key="course.id" :course="course" />
    </tbody>
  </table>
</template>
