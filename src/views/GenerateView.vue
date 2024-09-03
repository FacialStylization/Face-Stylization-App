<script setup lang="ts">
import { ref } from 'vue';

// Reference for image URL and description
import pic4 from '@/assets/pic4.png';
const imageUrl = ref(pic4);
const description = ref(
  'Ethereal realm with floating islands, bridges connecting clouds, mirroring dreamy anime visuals.'
);
</script>

<template>
  <!-- Main container, fills the screen -->
  <div
    class="dark:bg-gray-900 dark:text-gray-100 flex flex-col items-center justify-center w-full min-h-screen"
  >
    <h1 class="text-6xl font-serif mb-8">T2Vtuber</h1>
    <!-- Image Container, fills the screen width -->
    <div
      class="bg-gray-200 dark:bg-gray-800 rounded-2xl p-4 max-w-screen-2xl w-full mx-auto shadow-md flex flex-col justify-between h-auto"
    >
      <!-- Generated Label -->
      <div
        class="text-left font-serif text-2xl text-black dark:text-white rounded-2xl px-4 py-2 mb-4 inline-block"
      >
        <h2 class="text-4xl">generated</h2>
      </div>

      <!-- Image Display, centered in container -->
      <div
        class="relative flex-grow flex items-center justify-center rounded-2xl dark:border-gray-800 p-4"
      >
        <img :src="imageUrl" alt="Generated" class="w-full h-auto max-h-full object-cover" />
      </div>

      <!-- Input Box Container at the bottom -->
      <div class="relative w-full mt-4">
        <!-- Full rounded input box -->
        <div class="flex items-center bg-white dark:bg-gray-800 rounded-xl p-2 shadow-md w-full">
          <!-- Refresh icon on the left -->
          <button class="p-2 rounded-full dark:text-white">
            <img src="@/assets/refresh.png" alt="Refresh" />
          </button>
          <!-- Text input -->
          <input
            type="text"
            placeholder="Type your description..."
            class="flex-grow bg-transparent outline-none px-4 py-2 dark:text-white"
          />
          <!-- Generate icon on the right -->
          <button class="p-2 bg-gray-500 dark:bg-gray-500 rounded-xl">
            <img src="@/assets/generate.png" alt="Generate" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* You can add custom styles here to override Tailwind defaults if needed */
</style>
