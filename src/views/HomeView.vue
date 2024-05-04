<script setup lang="ts">
import CalcHeader from '../components/home/CalcHeader.vue';
import CourseTable from '../components/home/CourseTable.vue';
import ResultDisplay from '../components/home/ResultDisplay.vue';
</script>

<template>
  <div class="max-w-4xl w-full max-h-fit h-full relative p-8 mx-auto">
    <CalcHeader />
    <ResultDisplay />
    <CourseTable />
  </div>
</template>
