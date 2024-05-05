<script setup lang="ts">
import { computed, useAttrs, ref, type VNode } from 'vue';

const inputRef = ref();

defineExpose({
  focus: () => {
    console.log(inputRef.value);
    setTimeout(() => {
      inputRef.value.focus();
    }, 500);
  },
});

defineOptions({
  inheritAttrs: false,
});

defineProps<{
  icon?: VNode;
}>();

const value = defineModel('value');
const attrs = useAttrs();
const filteredAttrs = Object.fromEntries(
  Object.entries(attrs).filter(([key]) => key !== 'class' && key !== 'disabled')
);

const isFocused = ref(false);
const isDisabled = computed(() => attrs.disabled === true);
</script>

<template>
  <div
    :class="`${attrs['class']} ${isFocused ? 'border-gray-500' : 'border-gray-200'} ${
      isDisabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
    } border rounded-md p-4 flex flex-row items-center justify-between gap-4`"
  >
    <component
      :class="`size-4 ${isFocused ? 'text-gray-500' : 'text-gray-400'}`"
      v-if="icon"
      :is="icon"
    />

    <input
      ref="inputRef"
      class="flex-grow focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed invalid:border-red-500"
      @focusin="isFocused = true"
      @focusout="isFocused = false"
      :disabled="isDisabled"
      v-model="value"
      v-bind="filteredAttrs"
    />
  </div>
</template>
