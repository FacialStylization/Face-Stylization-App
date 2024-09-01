<script setup lang="ts">
import { defineProps } from 'vue';

const toGenerate = () => {
  // Redirect to /generate
  window.location.href = '/generate';
};

const toRoadMap = () => {
  // Redirect to /roadmap
  window.location.href = '/roadmap';
};

const toPricing = () => {
  // Redirect to /pricing
  window.location.href = '/pricing';
};

const toSetup = () => {
  // Redirect to /setup
  window.location.href = '/setup';
};

const props = defineProps({
  toGenerate: Function
});
</script>

<template>
  <div class="flex flex-col items-center justify-center py-16">
    <!-- Top Heading -->
    <h1 class="text-4xl font-bold text-center mb-8">
      The best and simplest way to generate Vtuber
    </h1>

    <!-- Container for Centered Div -->
    <div class="flex items-center justify-center w-5/6 rounded-3xl">
      <!-- Outer Container with Rounded Border -->
      <div
        class="relative w-full max-w-full mx-auto p-1 rounded-3xl bg-gray-300 shadow-xl border-20 border-gray-300"
      >
        <!-- Content Container with 16:9 aspect ratio -->
        <div
          class="relative rounded-3xl overflow-hidden aspect-w-16 border-20 border-gray-300 aspect-h-9 bg-gray-300"
        >
          <!-- Background Image -->
          <img
            src="@/assets/cover.png"
            alt="Background"
            class="absolute inset-0 object-cover w-full h-full rounded-3xl"
          />
          <!-- Content Overlay -->
          <div class="relative z-10 flex flex-col items-center justify-center px-6 py-20">
            <!-- Text Content -->
            <h1 class="text-5xl font-bold text-white mb-4">T2Vtuber</h1>
            <p class="text-xl text-white mb-6">High quality generations of live2d textures</p>
            <!-- Button -->
            <button
              @click="toGenerate"
              class="px-6 py-3 bg-white text-black rounded-full font-medium shadow-md hover:bg-gray-200"
            >
              Generate Textures →
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Content Section -->
    <div class="flex items-center justify-center w-5/6 px-4 py-10 rounded-3xl border-gray-300">
      <div
        class="flex w-full max-w-full mx-auto p-1 rounded-3xl bg-gray-300 shadow-xl border-20 border-gray-300"
      >
        <!-- Image Container 1 -->
        <div class="relative w-1/3 p-4">
          <div class="relative rounded-3xl overflow-hidden">
            <img src="@/assets/pic1.png" alt="RoadMap" class="object-cover w-full h-full" />
            <!-- Title and Button Overlay -->
            <div
              class="absolute inset-0 flex flex-col justify-between items-start p-4 bg-black bg-opacity-50"
            >
              <!-- Title at the top -->
              <h2 class="text-6xl font-bold text-white mb-2">RoadMap</h2>
              <!-- Button at the bottom -->
              <button
                @click="toRoadMap"
                class="px-4 py-2 mt-auto bg-white text-black rounded-full font-medium shadow-md hover:bg-gray-200"
              >
                Go to RoadMap →
              </button>
            </div>
          </div>
        </div>

        <!-- Image Container 2 -->
        <div class="relative w-1/3 p-4">
          <div class="relative rounded-3xl overflow-hidden">
            <img src="@/assets/pic2.png" alt="Pricing" class="object-cover w-full h-full" />
            <!-- Title and Button Overlay -->
            <div
              class="absolute inset-0 flex flex-col justify-between items-start p-4 bg-black bg-opacity-50"
            >
              <!-- Title at the top -->
              <h2 class="text-6xl font-bold text-white mb-2">Pricing</h2>
              <!-- Button at the bottom -->
              <button
                @click="toPricing"
                class="px-4 py-2 mt-auto bg-white text-black rounded-full font-medium shadow-md hover:bg-gray-200"
              >
                Go to Pricing →
              </button>
            </div>
          </div>
        </div>

        <!-- Image Container 3 -->
        <div class="relative w-1/3 p-4">
          <div class="relative rounded-3xl overflow-hidden">
            <img src="@/assets/pic3.png" alt="Setup" class="object-cover w-full h-full" />
            <!-- Title and Button Overlay -->
            <div
              class="absolute inset-0 flex flex-col justify-between items-start p-4 bg-black bg-opacity-50"
            >
              <!-- Title at the top -->
              <h2 class="text-6xl font-bold text-white mb-2">Setup</h2>
              <!-- Button at the bottom -->
              <button
                @click="toSetup"
                class="px-4 py-2 mt-auto bg-white text-black rounded-full font-medium shadow-md hover:bg-gray-200"
              >
                Go to Setup →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
