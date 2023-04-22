<script setup lang="ts">
import AudioPlayer from "@/modules/AudioPlayer/components/AudioPlayer.vue";
</script>

<template>
  <div class="container flex min-h-screen items-center justify-center">
    <AudioPlayer />
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
