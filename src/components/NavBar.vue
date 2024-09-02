<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed, defineProps, defineEmits } from 'vue';

const router = useRouter();
const currentRoute = computed(() => router.currentRoute.value.path);

const props = defineProps<{
  isDark: boolean;
}>();

const emit = defineEmits<{
  (e: 'toggle-theme'): void;
}>();
</script>

<template>
  <nav class="flex items-center justify-between py-4 fixed top-0 left-0 w-full z-10">
    <!-- Logo Section -->
    <div class="flex items-center space-x-4">
      <img src="@/assets/logo.png" alt="Logo" class="h-20" />
    </div>

    <!-- Middle Navigation Links -->
    <div
      class="absolute left-1/2 transform -translate-x-1/2 flex space-x-1 bg-gray-100 dark:bg-gray-800 py-1 px-3 rounded-lg dark:text-white text-black"
    >
      <router-link
        to="/home"
        :class="[
          'py-1 px-4 text-gray-800 dark:text-gray-300 font-medium rounded-lg transition-colors duration-200',
          currentRoute === '/home' ? 'bg-gray-300 text-black dark:bg-gray-500' : ''
        ]"
        >Home</router-link
      >
      <router-link
        to="/generate"
        :class="[
          'py-1 px-4 text-gray-800 dark:text-gray-300 font-medium rounded-lg transition-colors duration-200',
          currentRoute === '/generate' ? 'bg-gray-300 text-black dark:bg-gray-500' : ''
        ]"
        >Generate</router-link
      >
      <router-link
        to="/show"
        :class="[
          'py-1 px-4 text-gray-800 dark:text-gray-300 font-medium rounded-lg transition-colors duration-200',
          currentRoute === '/show' ? 'bg-gray-300 text-black dark:bg-gray-500' : ''
        ]"
        >Show</router-link
      >
    </div>

    <!-- Right Navigation Links and Theme Toggle -->
    <div class="flex items-center space-x-4">
      <router-link
        to="/pricing"
        class="text-gray-800 dark:text-gray-300 hover:text-green-500 font-medium"
        >Pricing</router-link
      >
      <!-- Theme Toggle Button -->
      <button
        @click="$emit('toggle-theme')"
        class="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full focus:outline-none"
      >
        {{ props.isDark ? 'Light Mode' : 'Dark Mode' }}
      </button>
      <router-link
        to="/setup"
        class="text-gray-800 dark:text-gray-300 hover:text-green-500 font-medium"
        >Setup</router-link
      >
    </div>
  </nav>
</template>

<style scoped>
.router-link:hover {
  background-color: transparent !important;
}
</style>
