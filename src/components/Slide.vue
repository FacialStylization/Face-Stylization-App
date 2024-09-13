<script setup lang="ts">
import { ref, onMounted } from 'vue';

import p1 from '@/assets/slide/1.png';
import p2 from '@/assets/slide/2.png';
import p3 from '@/assets/slide/3.png';
import p4 from '@/assets/slide/4.png';
import p5 from '@/assets/slide/5.png';
import p6 from '@/assets/slide/6.png';
import p7 from '@/assets/slide/7.png';
import p8 from '@/assets/slide/8.png';
import p9 from '@/assets/slide/9.png';
import p10 from '@/assets/slide/10.png';
import p11 from '@/assets/slide/11.png';
import p12 from '@/assets/slide/12.png';
import p13 from '@/assets/slide/13.png';
import p14 from '@/assets/slide/14.png';
import p15 from '@/assets/slide/15.png';
import p16 from '@/assets/slide/16.png';
import p17 from '@/assets/slide/17.png';
import p18 from '@/assets/slide/18.png';

const images = [
 p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18
];

const currentIndex = ref(0);

const prevSlide = (): void => {
  currentIndex.value--;
  if (currentIndex.value < 0) {
    currentIndex.value = images.length - 1;
  }
};

const nextSlide = (): void => {
  currentIndex.value++;
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
          <img :src="image" class="block mx-auto w-3/4 rounded-lg" />
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
