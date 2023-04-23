<script lang="ts" setup>
import BaseButton from "@/domain/Button/components/BaseButton.vue";
import { EIcon } from "@/domain/Icon/Icon.enum";
import { EButtonSize } from "@/domain/Button/ButtonSize.enum";
import { EButtonType } from "@/domain/Button/ButtonType.enum";
import { ref } from "vue";

// const player = ref<HTMLAudioElement>();
// const isPlaying = ref<boolean>(false);
//
const togglePlaying = (): void => {
  //   isPlaying.value = !isPlaying.value;
  //   if (isPlaying.value) {
  //     player.value?.play();
  //   } else {
  //     player.value?.pause();
  //   }
};
</script>

<template>
  <div class="audio-player">
    <div class="audio-player__title">Playing now</div>
    <img class="audio-player__album-cover" src="./images/album.jpg" alt=" " loading="lazy" />
    <div class="audio-player__artist">Lorem ipsum</div>
    <div class="audio-player__track">Lorem ipsum dolor sit amet</div>
    <div class="audio-player__duration">
      <div class="start">00:01</div>
      <div class="end">04:30</div>
    </div>
    <input type="range" value="20" min="0" max="100" class="audio-player__progressbar" />

    <div class="audio-player__controls">
      <BaseButton is-circle :icon="EIcon.BACKWARD" :size="EButtonSize.LARGE" />
      <BaseButton is-circle :icon="EIcon.PLAY" :type="EButtonType.PRIMARY" :size="EButtonSize.LARGE" @click="togglePlaying" />
      <BaseButton is-circle :icon="EIcon.FORWARD" :size="EButtonSize.LARGE" />
    </div>
  </div>
</template>

<style lang="scss">
.audio-player {
  max-width: 41.5rem;
  padding: 3.2rem 3rem 5.5rem;
  height: 100%;
  width: 100%;
  background-color: $gray-300;
  text-align: center;
  border-radius: $border-radius-lg;
  box-shadow: 28px 28px 56px $gray-100, -28px -28px 56px $white-100;

  &__title {
    font-weight: 600;
    font-size: 1.5rem;
    color: #a1a1a1;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-bottom: 2.4rem;
  }

  &__artist {
    width: 100%;
    font-size: 1.5em;
    text-align: center;
    font-weight: 500;
    opacity: 0.5;
  }

  &__track {
    text-align: center;
    font-weight: 400;
    font-size: 1.2em;
    opacity: 0.5;
    margin-bottom: 4rem;
  }

  &__album-cover {
    width: 15.6rem;
    height: 15.6rem;
    border-radius: $border-radius-full;
    margin: 0 auto 2.4rem;
    box-shadow: 2px 2px 7px $gray-100, -2px -2px 7px $gray-100, -8px -8px 50px $gray-200, 3px 3px 25px $gray-200;
  }

  &__progressbar {
    width: 80%;
    -webkit-appearance: none;
    outline: none;
    border: none;
    padding: 0;
    margin-bottom: 40px;

    &::-webkit-slider-runnable-track {
      background-color: $gray-170;
      height: 6px;
      border-radius: 3px;
    }

    &::-webkit-slider-thumb {
      cursor: pointer;
      -webkit-appearance: none;
      border-radius: 100%;
      background-color: $pink-100;
      height: 1.8rem;
      width: 1.8rem;
      margin-top: -0.7rem;
    }
  }

  &__duration {
    width: 80%;
    margin: 0 auto 0.8rem;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 600;
    color: #a1a1a1;
    letter-spacing: 1px;
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2rem;
  }
}
</style>
