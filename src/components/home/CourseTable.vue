<script setup lang="ts">
import CourseRow from './CourseRow.vue';

const props = defineProps<{
  courses: Course[];
}>();
</script>

<template>
  <table class="w-full border border-gray-300 rounded-3xl border-separate">
    <tbody class="divide-y divide-gray-300">
      <CourseRow v-for="course in props.courses" :key="course.id" :course="course" />
    </tbody>
  </table>
</template>
