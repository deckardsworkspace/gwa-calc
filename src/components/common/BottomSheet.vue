<script setup lang="ts">
// @ts-ignore
import VueBottomSheet from '@webzlodimir/vue-bottom-sheet';
import { type Ref, ref } from 'vue';

const sheetRef: Ref<InstanceType<typeof VueBottomSheet>> = ref();
defineExpose({
  sheetRef,
});
</script>

<template>
  <VueBottomSheet ref="sheetRef" :max-height="10000">
    <div class="pl-[calc(8px+1rem)] py-4 pr-4 w-full">
      <slot></slot>
    </div>
  </VueBottomSheet>
</template>
