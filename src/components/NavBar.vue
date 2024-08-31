<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps, defineEmits } from 'vue';

const router = useRouter();

const props = defineProps<{
  isDark: boolean;
}>();

const emit = defineEmits<{
  (e: 'toggle-theme'): void;
}>();
</script>

<template>
  <nav
    class="flex items-center justify-between py-4 bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-10"
  >
    <!-- Logo Section -->
    <div class="flex items-center space-x-4">
      <img src="@/assets/logo.png" alt="Logo" class="h-20" />
    </div>

    <!-- Middle Navigation Links -->
    <div
      class="absolute left-1/2 transform -translate-x-1/2 flex space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-full"
    >
      <router-link
        to="/home"
        class="px-4 py-2 text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
        >Home</router-link
      >
      <router-link
        to="/generate"
        class="px-4 py-2 text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
        >Generate</router-link
      >
      <router-link
        to="/show"
        class="px-4 py-2 text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
        >Show</router-link
      >
    </div>

    <!-- Right Navigation Links and Theme Toggle -->
    <div class="flex items-center space-x-4">
      <router-link
        to="/pricing"
        class="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
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
        class="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
        >Setup</router-link
      >
    </div>
  </nav>
</template>

<style scoped>
/* No additional styles needed as Tailwind CSS handles all styling */
</style>
