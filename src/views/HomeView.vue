<script setup lang="ts">
import CalcHeader from '../components/home/CalcHeader.vue';
import CourseTable from '../components/home/CourseTable.vue';
import ResultDisplay from '../components/home/ResultDisplay.vue';
import { PshsTerm, PshsTerms } from '@/utils/terms-pshs';
import { ref } from 'vue';

const term = PshsTerms[PshsTerm.GRADE_10];
const result = ref(1);

const onRecalculate = (newResult: number) => {
  result.value = newResult;
};
</script>

<template>
  <div class="max-w-4xl w-full max-h-fit h-full relative p-8 mx-auto">
    <CalcHeader :currentTermName="'Default Term'" />
    <ResultDisplay :result="result" />
    <CourseTable :term="term" @recalculate="onRecalculate" />
  </div>
</template>
