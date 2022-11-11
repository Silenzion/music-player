<script lang="ts" setup>
import { computed } from "vue";

enum IconsData {
  backward = "fas fa-backward",
  play = "fas fa-play",
  forward = "fas fa-forward",
}

type ButtonSize = "small" | "medium" | "large";
type ButtonType = "primary" | "default";

const props = withDefaults(
  defineProps<{
    isCircle: boolean;
    size?: ButtonSize;
    icon?: string;
    caption?: string;
    type?: ButtonType;
  }>(),
  {
    isCircle: false,
    size: "medium",
    type: "default",
  }
);

const classes = computed<object>(() => {
  return {
    "base-button_circle": props.isCircle,
  };
});

const iconClasses = computed<object>(() => {
  return props.icon ? IconsData[props.icon] : {};
});
</script>

<template>
  <button type="button" :class="['base-button', `base-button_${size}`, `base-button_${type}`, classes]">
    <i v-if="icon" :class="iconClasses"></i>
    <span v-else>{{ caption || "" }}</span>
  </button>
</template>

<style lang="scss">
.base-button {
  @apply py-8 px-12 font-bold;
  text-align: center;
  transition: 0.2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
    6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
      2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7), inset -2px -2px 4px rgba(255, 255, 255, 0.5),
      inset 2px 2px 2px rgba(255, 255, 255, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  }

  &_circle {
    @apply rounded-full p-0 align-middle;
  }

  &_medium {
    width: 40px;
    height: 40px;
  }

  &_large {
    width: 70px;
    height: 70px;
    font-size: 18px;
  }

  &_default {
    @apply bg-gray-200;
  }

  &_primary {
    @apply text-pink-100;
    //border: 2px solid transparent;
    //background: linear-gradient(160deg, #f5c2d6 0%, #e4e6eb 100%);
    //box-shadow: -3px -3px 6px 2px #ffffff, 5px 5px 8px 0px rgba(0, 0, 0, 0.17), 1px 2px 2px 0px rgba(0, 0, 0, 0.1);
    //transition: 0.1s;
  }
}
</style>
