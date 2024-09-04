<script setup lang="ts">
import { ref, onMounted } from 'vue';
// @ts-ignore: next-line
import { loadlive2d } from 'live2d-widget';

onMounted(() => {
  const modelPath = '../assets/hiyori_free_en/runtime/hiyori_free_t08.model3.json';

  loadlive2d('live2d-widget-container', modelPath).then(() => {
    console.log('Live2D model loaded successfully.');
  }).catch((error: any) => {
    console.error('Failed to load Live2D model:', error);
  });
});

// Reference for image URL
import pic4 from '@/assets/pic4.png';
const imageUrl = ref(pic4);
</script>

<template>
  <!-- Main container, fills the screen -->
  <div
    class="dark:bg-gray-900 dark:text-gray-100 flex flex-col items-center justify-center w-full min-h-screen"
  >
    <!-- Page Title -->
    <h1 class="text-6xl font-serif mb-8">T2Vtuber</h1>

    <!-- Image Container, fills the screen width -->
    <div
      class="bg-gray-200 dark:bg-gray-800 rounded-2xl p-4 max-w-screen-2xl w-full mx-auto shadow-md flex flex-col justify-between h-auto"
    >
      <!-- Generated Label -->
      <div
        class="font-serif text-2xl text-black dark:text-white rounded-full px-6 py-2 mb-4 inline-block"
      >
        <h2 class="text-4xl">live2d models</h2>
      </div>

      <!-- Image Display, centered in container -->
      <div
        class="relative flex-grow flex items-center justify-center rounded-2xl dark:border-gray-800 p-4"
      >
        <!-- <img :src="imageUrl" alt="Generated" class="w-full h-auto object-cover" /> -->
        <div id="live2d-widget-container"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#live2d-widget-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
