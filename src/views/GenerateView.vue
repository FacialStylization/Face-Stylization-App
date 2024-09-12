<script setup lang="ts">
import { ref, onMounted } from 'vue';
import pic4 from '@/assets/pic4.png';

const imageUrl = ref(pic4);
const description = ref(
  'Ethereal realm with floating islands, bridges connecting clouds, mirroring dreamy anime visuals.'
);

const showProgressBar = ref(false);
const generationComplete = ref(false);
const progressValue = ref(0);
const baseTime = 10; // 基础时间
const timeVariance = 5; // 时间误差

const imageWidth = ref(0);
const imageHeight = ref(0);

function generateImage() {
  showProgressBar.value = true;
  generationComplete.value = false;
  progressValue.value = 0;
  const totalTime =
    baseTime + Math.floor(Math.random() * timeVariance * 2) - timeVariance;
  const interval = setInterval(() => {
    if (progressValue.value < 100) {
      progressValue.value += 100 / totalTime;
    } else {
      clearInterval(interval);
      showProgressBar.value = false;
      generationComplete.value = true;
    }
  }, 1000); // 每秒更新一次进度
}

onMounted(() => {
  const img = new Image();
  img.src = imageUrl.value;
  img.onload = () => {
    imageWidth.value = img.naturalWidth;
    imageHeight.value = img.naturalHeight;
  };
});
</script>

<template>
  <div
    class="dark:bg-gray-900 dark:text-gray-100 flex flex-col items-center justify-center w-full min-h-screen"
  >
    <h1 class="text-6xl font-serif mb-8">T2Vtuber</h1>
    <div
      class="bg-gray-200 dark:bg-gray-800 rounded-2xl p-4 max-w-screen-2xl w-full mx-auto shadow-md flex flex-col justify-between h-auto"
    >
      <div
        class="text-left font-serif text-2xl text-black dark:text-white rounded-2xl px-4 py-2 mb-4 inline-block"
      >
        <h2 class="text-4xl">generated</h2>
      </div>

      <div
        class="relative flex items-center justify-center rounded-2xl dark:border-gray-800 p-4 mx-auto"
        :style="{ width: imageWidth + 'px', height: imageHeight + 'px' }"
      >
        <img
          v-if="!showProgressBar && !generationComplete"
          :src="imageUrl"
          alt="Generated"
          class="object-contain max-w-full max-h-full"
        />
        <div
          v-else-if="showProgressBar"
          class="flex items-center justify-center w-full h-full"
        >
          <div class="w-1/2 h-8 bg-blue-500 rounded-full">
            <div
              class="h-full bg-blue-800 rounded-full"
              :style="{ width: progressValue + '%' }"
            ></div>
          </div>
        </div>
        <div v-else class="text-2xl text-indigo-500">
          Successfully Generated
        </div>
      </div>

      <div class="relative w-full mt-4">
        <div
          class="flex items-center bg-white dark:bg-gray-800 rounded-xl p-2 shadow-md w-full"
        >
          <button class="p-2 rounded-full dark:text-white">
            <img src="@/assets/refresh.png" alt="Refresh" />
          </button>
          <input
            type="text"
            placeholder="Type your description..."
            class="flex-grow bg-transparent outline-none px-4 py-2 dark:text-white"
          />
          <button
            @click="generateImage"
            class="p-2 bg-gray-500 dark:bg-gray-500 rounded-xl"
          >
            <img src="@/assets/generate.png" alt="Generate" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 你的样式 */
</style>
