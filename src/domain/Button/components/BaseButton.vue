<script lang="ts" setup>
import { computed } from "vue";
import { EButtonSize } from "@/domain/Button/ButtonSize.enum";
import { EIcon } from "@/domain/Icon/Icon.enum";
import { CssClasses } from "@/infrastructure/CssClasses.type";
import { EButtonType } from "@/domain/Button/ButtonType.enum";

const props = withDefaults(
  defineProps<{
    isCircle: boolean;
    size?: EButtonSize;
    icon?: EIcon;
    caption?: string;
    type?: EButtonType;
  }>(),
  {
    isCircle: false,
    size: EButtonSize.MEDIUM,
    caption: "",
    type: EButtonType.DEFAULT,
  }
);

const classes = computed<CssClasses>(() => {
  return {
    "base-button_circle": props.isCircle,
  };
});
</script>

<template>
  <button type="button" :class="['base-button', `base-button_${size}`, `base-button_${type}`, classes]">
    <i v-if="icon" :class="icon" />
    <span v-if="caption">{{ caption }}</span>
  </button>
</template>

<style lang="scss">
.base-button {
  text-align: center;
  padding: 0.8rem 1.2rem;
  font-weight: 700;
  transition: 0.2s ease-in-out;
  color: $gray-500;
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
    border-radius: $border-radius-full;
    padding: 0;
    vertical-align: middle;
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
    background-color: $gray-200;
  }

  &_primary {
    background-color: $pink-100;
    color: $white-100;
  }
}
</style>
