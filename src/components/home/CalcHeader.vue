<script setup lang="ts">
import { IconNewReleases, IconPersonOutline } from '@iconify-prerendered/vue-material-symbols';
import { useGradesStore } from '@/stores/grades';
import { computed, ref, watch } from 'vue';
import { useUserStore } from '@/stores/user';
import AccountForm from './AccountForm.vue';
import LoginForm from './LoginForm.vue';
import TooltipWrapper from '../common/TooltipWrapper.vue';

const { term } = useGradesStore();
const currentTermName = ref(term.name);
const formVisible = ref(false);

const store = useUserStore();
const username = computed(() => store.username);
const avatarUrl = computed(() => store.avatarUrl);

watch(term, () => {
  currentTermName.value = term.name;
});

const openForm = () => {
  formVisible.value = true;
};

const closeForm = () => {
  formVisible.value = false;
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
        <TooltipWrapper
          location="left"
          :text="username ? `Hi, ${username}!` : 'Log in to sync grades'"
          @click="openForm"
        >
          <div
            class="overflow-hidden rounded-full size-10 md:size-12 bg-gray-200 flex justify-center items-center"
          >
            <img
              v-if="avatarUrl"
              :src="avatarUrl"
              alt="User avatar"
              class="w-full h-full object-cover"
            />
            <IconPersonOutline v-else class="size-6 md:size-7 text-gray-600" />
          </div>
        </TooltipWrapper>
      </div>
    </div>

    <AccountForm v-if="!!username" :open="formVisible" @logged-out="closeForm" />
    <LoginForm v-else :open="formVisible" @logged-in="closeForm" />
  </header>
</template>
