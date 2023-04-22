<script lang="ts" setup>
import BaseButton from "@/modules/Base/BaseButton/BaseButton.vue";
</script>
<template>
  <div class="audio-player">
    <div class="audio-player__title">Playing now</div>
    <img class="audio-player__album-cover" src="https://placeimg.com/150/150/any" alt=" " />
    <div class="audio-player__artist">Malice Mizer</div>
    <div class="audio-player__track">Test</div>
    <div class="">Progressbar</div>
    <div class="audio-player__controls">
      <BaseButton is-circle icon="backward" size="large" />
      <BaseButton is-circle icon="play" type="primary" size="large" />
      <BaseButton is-circle icon="forward" size="large" />
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
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.4rem;
    color: $gray-350;
    margin-bottom: 2.4rem;
    text-transform: uppercase;
  }
  &__artist{

  }

  &__album-cover {
    width: 15.6rem;
    height: 15.6rem;
    border-radius: $border-radius-full;
    margin: 0 auto 2.4rem;
    box-shadow: 2px 2px 7px $gray-100, -2px -2px 7px $gray-100, -8px -8px 50px $gray-200, 3px 3px 25px $gray-200;
  }
  &__controls{
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
  }
}
</style>
