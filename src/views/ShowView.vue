<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Live2D from '@/components/Live2D.vue';
// Reference for image URL
import pic4 from '@/assets/pic4.png';
const imageUrl = ref(pic4);

const route = useRoute();
const description = ref(route.query.description || 'No description provided');
</script>

<template>
  <!-- Main container, fills the screen -->
  <div
    class="dark:bg-gray-900 dark:text-gray-100 flex flex-col items-center justify-center w-5/6 mx-auto min-h-screen"
  >
    <!-- Page Title -->
    <h1 class="text-6xl font-serif mb-8">T2Vtuber</h1>

    <!-- Image Container, fills the screen width -->
    <div
      class="bg-gray-200 dark:bg-gray-800 rounded-2xl p-4 max-w-screen-2xl w-5/6 mx-auto shadow-md flex flex-col justify-between h-auto"
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
        <!-- <img
          :src="imageUrl"
          alt="Generated"
          class="w-full h-auto object-cover"
        /> -->
        <!-- Live2D Component -->
        <Live2D />
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
