<script lang="ts" setup>
import BaseButton from "@/modules/Base/BaseButton/BaseButton.vue";
</script>
<template>
  <div class="audio-player max-w-[415px]">
    <div class="mb-24 flex w-full flex-row items-center justify-center">
      <div class="uppercase text-gray-350">Playing now</div>
    </div>
    <img class="base-album mx-auto mb-24 rounded-full" src="https://placeimg.com/150/150/any" alt=" " />
    <div class="font-medium">Malice Mizer</div>
    <div class="mb-16">Test</div>
    <div class="mb-24">Progressbar</div>
    <div class="flex justify-center gap-x-10">
      <BaseButton is-circle icon="backward" size="large" />
      <BaseButton is-circle icon="play" type="primary" size="large" />
      <BaseButton is-circle icon="forward" size="large" />
    </div>
  </div>
</template>
<style lang="scss">
.audio-player{
    @apply pt-32 pb-55 px-30 rounded-lg h-full w-full bg-gray-300 text-center;

    box-shadow: 28px 28px 56px #cecece, -28px -28px 56px #ffffff;

  &-album{
    @apply w-156 h-156;
    box-shadow: 2px 2px 7px #cecece, -2px -2px 7px #cecece,
    -8px -8px 50px #efefef, 3px 3px 25px #efefef;
  }
}
</style>
