<script setup lang="ts">
import CourseRow from './CourseRow.vue';
import { useGradesStore } from '@/stores/grades';

const store = useGradesStore();
const term = store.term;
</script>

<template>
  <div class="p-4 md:p-8">
    <table class="w-full border border-separate border-gray-300 rounded-xl md:rounded-3xl">
      <tbody class="divide-y divide-gray-300">
        <CourseRow v-for="course in term.courses" :key="course.id" :course="course" />
      </tbody>
    </table>
  </div>
</template>
