<script setup lang="ts">
import { baseStyles, colorStyles, type ColorName } from './button-styles';
import type { VNode } from 'vue';

const props = withDefaults(
  defineProps<{
    small?: boolean;
    color?: ColorName;
    leftIcon?: VNode;
    rightIcon?: VNode;
  }>(),
  {
    small: false,
    color: 'gray',
    round: false,
  }
);

const emit = defineEmits(['click']);

const padding = props.small ? 'p-1 md:p-1.5' : 'p-2 md:p-3';
const iconSize = props.small ? 'size-4' : 'size-4 md:size-6';
const textSize = props.small ? 'text-sm' : 'text-base';
const colorStyle = colorStyles[props.color];
</script>

<template>
  <button
    :class="`${baseStyles} ${colorStyle} ${padding} flex flex-row items-center justify-between gap-2 rounded-md`"
    @click="emit('click')"
  >
    <component :class="iconSize" v-if="leftIcon" :is="leftIcon" />
    <span :class="iconSize" v-else>&nbsp;</span>

    <span :class="`${textSize} flex-grow`"><slot></slot></span>

    <component :class="iconSize" v-if="rightIcon" :is="rightIcon" />
    <span :class="iconSize" v-else>&nbsp;</span>
  </button>
</template>
