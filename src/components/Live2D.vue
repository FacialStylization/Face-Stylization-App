<script setup lang="ts">
// @ts-ignore: ignore TypeScript warning
import live2d from 'vue-live2d';
import { ref } from 'vue';

const model = ref(['Potion-Maker/Pio', 'school-2017-costume-yellow']);
const apiPath = ref('http://localhost:8080/indexes');
</script>

<template>
  <div class="live2d-container">
    <!-- Include the live2d component -->
    <live2d :model="model" :width="600" :height="400" :apiPath="apiPath" />
  </div>
</template>

<style scoped>
/* Optional: Add your own styles */
.live2d-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
}
</style>
