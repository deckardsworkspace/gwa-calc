<script setup lang="ts">
// @ts-ignore
import VueBottomSheet from '@webzlodimir/vue-bottom-sheet';
import { computed, ref, watch, type Ref } from 'vue';

const props = defineProps<{
  open: boolean;
  onClose?: () => void;
}>();

const loginForm: Ref<InstanceType<typeof VueBottomSheet>> = ref(undefined);
const open = computed(() => props.open);

watch(open, () => {
  if (!loginForm.value) {
    return;
  }

  if (open.value) {
    console.log('opening');
    loginForm.value.open();
  } else {
    console.log('closing');
    loginForm.value.close();
  }
});
</script>

<template>
  <VueBottomSheet ref="loginForm">
    <div class="pl-[calc(8px+1rem)] py-4 pr-4 w-full">
      <div class="flex flex-col items-center">
        <h3 class="text-lg font-semibold">Log in</h3>
        <p class="text-sm text-gray-500">Log in to sync your grades</p>
      </div>
    </div>
  </VueBottomSheet>
</template>
