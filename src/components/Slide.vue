<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 导入图像
import overView from '@/assets/overview.png';
import homeView from '@/assets/homeview.png';
import generateView from '@/assets/generateview.png';
import showView from '@/assets/showview.png';
import pricingView from '@/assets/pricingview.png';
import setupView from '@/assets/setupview.png';
import loginView from '@/assets/loginview.png';

const images = [
  overView,
  homeView,
  generateView,
  showView,
  pricingView,
  setupView,
  loginView
];

// 定义响应式数据
const currentIndex = ref(0);

const prevSlide = (): void => {
  currentIndex.value--;
  if (currentIndex.value < 0) {
    // 设置为最后一个元素的索引
    currentIndex.value = images.length - 1;
  }
};

const nextSlide = (): void => {
  currentIndex.value++;
  // 重置为第一个元素的索引
  if (currentIndex.value >= images.length) {
    currentIndex.value = 0;
  }
};
</script>

<template>
  <div class="relative h-64">
    <div class="p-4 h-full flex items-center justify-center min-h-svh">
      <div
        class="rounded-lg relative bg-gray-200 dark:bg-gray-800 h-full w-full"
      >
        <h1
          class="flex items-center justify-center text-gray-800 text-center text-4xl"
        >
          Our Roadmap
        </h1>
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="{
            'absolute inset-0 transition-opacity duration-500 flex items-center justify-center': true,
            hidden: currentIndex !== index,
            block: currentIndex === index
          }"
        >
          <img :src="image" class="block mx-auto w-1/2 rounded-lg" />
        </div>
        <div
          class="absolute inset-y-0 left-0 flex items-center justify-center p-4"
        >
          <button
            class="transform -translate-y-1/2 text-6xl text-gray-600"
            @click="prevSlide"
          >
            <
          </button>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center justify-center"
        >
          <button
            class="transform -translate-y-1/2 text-6xl text-gray-600"
            @click="nextSlide"
          >
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hidden {
  display: none;
}
.active {
  display: block;
}
</style>
