<script setup lang="ts">
// @ts-ignore: ignore TypeScript warning
import live2d from 'vue-live2d';
import { ref } from 'vue';

const skins = [
  'animal-costume-racoon',
  'animal-costume',
  'default-costume',
  'default',
  'halloween-costume',
  'new2015-costume-pajamas',
  'overalls-costume-white',
  'overalls-costume',
  'school-2017-costume-yellow',
  'school-costume-red',
  'school-costume',
  'sorceress-costume',
  'winter-costume-white'
];

const getRandomSkin = () => {
  const randomIndex = Math.floor(Math.random() * skins.length);
  return skins[randomIndex];
};

const model = ref(['Potion-Maker/Pio', getRandomSkin()]);
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
