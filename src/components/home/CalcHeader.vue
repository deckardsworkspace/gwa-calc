<script setup lang="ts">
import { IconNewReleases, IconPersonOutline } from '@iconify-prerendered/vue-material-symbols';
import { useGradesStore } from '@/stores/grades';
import { ref, watch } from 'vue';
import LoginForm from './LoginForm.vue';
import TooltipWrapper from '../common/TooltipWrapper.vue';

const { term } = useGradesStore();
const currentTermName = ref(term.name);
const loginFormVisible = ref(false);

watch(term, () => {
  currentTermName.value = term.name;
});

const openLoginForm = () => {
  loginFormVisible.value = true;
};

const closeLoginForm = () => {
  loginFormVisible.value = false;
};
</script>

<template>
  <header class="p-4 md:px-16 md:py-6">
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <h3 class="text-base md:text-2xl">GWA Calc 2</h3>
        <div class="flex items-center gap-2">
          <p class="text-sm md:text-base">{{ currentTermName }}</p>
          <IconNewReleases class="text-emerald-700 size-4" />
        </div>
      </div>

      <div class="flex flex-row-reverse items-center gap-4">
        <TooltipWrapper location="left" text="Log in to sync grades" @click="openLoginForm">
          <div
            class="overflow-hidden rounded-full size-10 md:size-12 bg-gray-200 flex justify-center items-center"
          >
            <IconPersonOutline class="size-6 md:size-7 text-gray-600" />
          </div>
        </TooltipWrapper>
      </div>
    </div>

    <LoginForm ref="login-form" :open="loginFormVisible" @closed="closeLoginForm" />
  </header>
</template>
