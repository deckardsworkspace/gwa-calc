<script setup lang="ts">
import type { VNode } from 'vue';
import { baseStyles, colorStyles, type ColorName } from './button-styles';

const props = withDefaults(
  defineProps<{
    small?: boolean;
    color?: ColorName;
    round?: boolean;
    icon: VNode;
  }>(),
  {
    small: false,
    color: 'gray',
    round: false,
  }
);

const emit = defineEmits(['click']);

const padding = props.small ? 'p-1 md:p-1.5' : 'p-2 md:p-3';
const size = props.small ? 'size-6' : 'size-6 md:size-8';
const rounded = props.round ? 'rounded-full' : 'rounded-lg';
const colorStyle = colorStyles[props.color];
</script>

<template>
  <button :class="`${baseStyles} ${colorStyle} ${padding} ${rounded}`" @click="emit('click')">
    <component :is="icon" :class="size" />
  </button>
</template>
