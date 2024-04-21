<script setup lang="ts">
import CalcHeader from '../components/home/CalcHeader.vue';
import CourseTable from '../components/home/CourseTable.vue';
import ResultDisplay from '../components/home/ResultDisplay.vue';

const courses = [
  {
    id: '1',
    name: 'Course 1',
    units: 3,
    value: 1,
    onUpdate: (id: string, newValue: number) => {
      console.log(`Course ${id} updated to ${newValue}`);
    },
  },
  {
    id: '2',
    name: 'Course 2',
    units: 3,
    value: 3,
    onUpdate: (id: string, newValue: number) => {
      console.log(`Course ${id} updated to ${newValue}`);
    },
  },
];
</script>

<template>
  <div class="max-w-4xl w-full max-h-fit h-full p-8 mx-auto">
    <CalcHeader :currentTermName="'Default Term'" />
    <ResultDisplay :result="3.14159" />
    <CourseTable :courses="courses" />
  </div>
</template>
