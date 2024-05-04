<script setup lang="ts">
import type { VNode } from 'vue';

export interface Props {
  small?: boolean;
  color?: string;
  round?: boolean;
  icon: VNode;
}

const props = withDefaults(defineProps<Props>(), {
  small: false,
  color: 'gray',
  round: false,
});

const emit = defineEmits(['click']);

const padding = props.small ? 'p-1 md:p-1.5' : 'p-2 md:p-3';
const size = props.small ? 'size-6' : 'size-6 md:size-8';
const rounded = props.round ? 'rounded-full' : 'rounded-lg';
const colorStyles: Record<string, string> = {
  gray: 'from-gray-50 to-gray-100 border border-gray-400 text-gray-600',
  red: 'from-red-50 to-red-100 border border-red-400 text-red-600',
  yellow: 'from-yellow-50 to-yellow-100 border border-yellow-400 text-yellow-600',
  green: 'from-green-50 to-green-100 border border-green-400 text-green-600',
  blue: 'from-blue-50 to-blue-100 border border-blue-400 text-blue-600',
  indigo: 'from-indigo-50 to-indigo-100 border border-indigo-400 text-indigo-600',
  purple: 'from-purple-50 to-purple-100 border border-purple-400 text-purple-600',
  pink: 'from-pink-50 to-pink-100 border border-pink-400 text-pink-600',
  orange: 'from-orange-50 to-orange-100 border border-orange-400 text-orange-600',
};
const colorStyle = colorStyles[props.color];
</script>

<template>
  <button
    :class="`bg-gradient-to-b border ${colorStyle} ${padding} ${rounded} drop-shadow-sm`"
    @click="emit('click')"
  >
    <component :is="icon" :class="size" />
  </button>
</template>
