<template>
  <div class="live2d-container">
    <!-- Include the live2d component -->
    <live2d
      :model="model"
      :width="300"
      :height="400"
      :idle-motion="idleMotion"
      :canvas-id="'live2d-canvas'"
      :mobile-show="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore: ignore TypeScript warning
import live2d from 'vue-live2d';

// Define the model path and optional motions
const model = ref({
  jsonPath: '@/assets/hiyori_free_en/runtime/hiyori_free_t08.model3.json' // Update this path to your model's JSON file
});

const idleMotion = ref({
  jsonPath: '@/assets/hiyori_free_en/runtime/motion/hiyori_m06.motion3.json' // Update this path to your motion JSON file
});
</script>

<style scoped>
/* Optional: Add your own styles */
.live2d-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #000; /* Dark background for the model */
}
</style>
