<script lang="ts" setup>
import BaseButton from "@/domain/Button/components/BaseButton.vue";
import { EIcon } from "@/domain/Icon/Icon.enum";
import { EButtonSize } from "@/domain/Button/ButtonSize.enum";
import { EButtonType } from "@/domain/Button/ButtonType.enum";
import { computed, ref, watch } from "vue";
import { useAudioPlayerStore } from "@/modules/AudioPlayer/store/AudioPlayerStore.store";
import { PlaylistConfig } from "@/modules/AudioPlayer/infrastructure/PlaylistConfig.const";
import durationFormatter from "@/infrastructure/DurationFormatter";
import { UNKNOWN_DURATION_STUB } from "@/modules/AudioPlayer/infrastructure/Stubs.const";

const audioPlayerStore = useAudioPlayerStore();
const player = ref<HTMLAudioElement>();
const progressSliderValue = ref(0);

const formatType = computed<string>(() => {
  if (audioPlayerStore.currentAudio?.url) {
    const arr = audioPlayerStore.currentAudio?.url.split(".") || [];
    const extension = arr[arr.length - 1].toUpperCase();
    switch (extension) {
      case "WAV":
        return "audio/wav";
      case "MP3":
        return "audio/mpeg";
      case "OGG":
        return "audio/ogg";
    }
    return "audio/mpeg";
  }
  return "audio/mpeg";
});

const timeUpdateHandler = (): void => {
  if (player.value) {
    progressSliderValue.value = Math.floor((player.value.currentTime / audioPlayerStore.duration) * 100);
    audioPlayerStore.progress = Math.floor((player.value.currentTime / audioPlayerStore.duration) * 100);
  }
};

const inputHandler = (event): void => {
  audioPlayerStore.slideProgress(+event.target?.value);
};

const getFormattedProgress = (): string => {
  return audioPlayerStore.currentAudio && player.value?.duration
    ? durationFormatter(Math.floor(audioPlayerStore.progress))
    : UNKNOWN_DURATION_STUB;
};

const getFormattedDuration = (): string => {
  return player.value?.duration ? durationFormatter(Math.floor(player.value.duration)) : UNKNOWN_DURATION_STUB;
};

watch(
  () => player.value,
  (newVal?: HTMLAudioElement) => {
    if (newVal && !audioPlayerStore.player) {
      audioPlayerStore.setPlayer(newVal);
      audioPlayerStore.playlist = PlaylistConfig;
      audioPlayerStore.setCurrentAudio(audioPlayerStore.playlist[0]);
    }
  }
);
</script>

<template>
  <div class="audio-player">
    <div class="audio-player__title">Playing now</div>
    <img
      class="audio-player__album-cover"
      :src="audioPlayerStore.currentAudio?.cover"
      :alt="audioPlayerStore.currentAudio?.title"
      loading="lazy"
    />
    <div class="audio-player__artist">{{ audioPlayerStore.currentAudio?.artistTitle }}</div>
    <div class="audio-player__track">{{ audioPlayerStore.currentAudio?.title }}</div>
    <div class="audio-player__duration">
      <div class="start">{{ getFormattedProgress() }}</div>
      <div class="end">{{ getFormattedDuration() }}</div>
    </div>
    <input
      type="range"
      aria-label="Прогресс аудио"
      :value="progressSliderValue"
      min="0"
      max="100"
      class="audio-player__progressbar"
      @input="inputHandler"
    />

    <div class="audio-player__controls">
      <BaseButton is-circle :icon="EIcon.BACKWARD" :size="EButtonSize.LARGE" @click="audioPlayerStore.setPrev" />
      <BaseButton
        is-circle
        :icon="audioPlayerStore.isPlaying ? EIcon.PAUSE : EIcon.PLAY"
        :type="EButtonType.PRIMARY"
        :size="EButtonSize.LARGE"
        @click="audioPlayerStore.toggle"
      />
      <BaseButton is-circle :icon="EIcon.FORWARD" :size="EButtonSize.LARGE" @click="audioPlayerStore.setNext" />
    </div>
    <audio ref="player" @timeupdate="timeUpdateHandler" @ended="audioPlayerStore.setNext">
      <source :src="audioPlayerStore.currentAudio?.url" :type="formatType" />
    </audio>
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
