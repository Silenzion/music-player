<script setup lang="ts">
import BaseButton from "@/assets/components/BaseButton.vue";
</script>

<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="base-card max-w-[415px]">
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
  </div>
</template>
