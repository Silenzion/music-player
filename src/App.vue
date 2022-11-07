<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="base-card w-[415px] rounded-lg bg-gray-300 text-center">
      <div class="mb-24 flex w-full flex-row items-center justify-between">
        <button class="base-btn_circle"><i class="fas fa-arrow-left"></i></button>
        <div class="uppercase text-gray-350">Playing now</div>
        <button class="base-btn_circle"><i class="fas fa-bars"></i></button>
      </div>
      <img class="base-album mx-auto mb-24 rounded-full" src="https://placeimg.com/150/150/any" alt=" "/>
      <div class="font-medium">Malice Mizer</div>
      <div class="mb-16">Test</div>
      <div class="mb-24">Progressbar</div>
      <div class="flex justify-center gap-x-10">
        <button class="base-btn_circle base-btn_large"><i class="fas fa-backward"></i></button>
        <button class="base-btn_circle base-btn_large"><i class="fas fa-play"></i></button>
        <button class="base-btn_circle base-btn_large"><i class="fas fa-forward"></i></button>
      </div>
    </div>
  </div>
</template>
