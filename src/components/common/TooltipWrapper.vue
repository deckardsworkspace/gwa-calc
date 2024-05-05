<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  text: string;
  location: 'top' | 'bottom' | 'left' | 'right';
}>();

const locationStyles = {
  top: 'left-1/2 -translate-x-1/2 bottom-full mb-2',
  bottom: 'left-1/2 -translate-x-1/2 top-full mt-2',
  left: 'top-1/2 -translate-y-1/2 right-full mr-2',
  right: 'top-1/2 -translate-y-1/2 left-full ml-2',
};
const locationStyle = computed(() => locationStyles[props.location]);
</script>

<template>
  <div class="relative group">
    <slot></slot>

    <div
      :class="`${locationStyle} tooltip tooltip-${location} absolute inline-block w-auto invisible group-hover:visible bg-black text-gray-50 text-sm rounded-md p-2 z-20`"
    >
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<style scoped>
/* https://www.w3schools.com/css/css_tooltip.asp */
.tooltip::after {
  content: ' ';
  position: absolute;
  border-style: solid;
  border-width: 5px;
}
.tooltip-top::after {
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-color: black transparent transparent transparent;
}
.tooltip-bottom::after {
  bottom: 100%; /* At the top of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-color: transparent transparent black transparent;
}
.tooltip-left::after {
  top: 50%;
  left: 100%; /* To the right of the tooltip */
  margin-top: -5px;
  border-color: transparent transparent transparent black;
}
.tooltip-right::after {
  top: 50%;
  right: 100%; /* To the left of the tooltip */
  margin-top: -5px;
  border-color: transparent black transparent transparent;
}
</style>
