<script lang="ts" setup>
import {computed, ref} from "vue";

const emit = defineEmits<{
  (e: "update", payload: number): void;
}>();

const props = defineProps<{
  modelValue: number,
}>();

const inputValue = ref(0);
const styles = computed<string>(() => {
  return `background-size: ${props.modelValue}% 100%`;
});

const inputHandler = (event:Event):void=> {
  if (event.target instanceof HTMLInputElement) {
    emit("update", +event.target.value);
    inputValue.value = +event.target.value;
  }
};
</script>
<template>
  <input
    type="range"
    :value="modelValue"
    aria-label="Прогресс аудио"
    min="0"
    max="100"
    :style="styles"
    class="audio-player__progressbar"
    @input="inputHandler"
  />
</template>

<style scoped>

</style>
