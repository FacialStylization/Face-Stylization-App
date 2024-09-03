<script setup lang="ts">
import { ref } from 'vue';

// References for email and password
const email = ref('');
const password = ref('');
</script>

<template>
  <!-- Main container with full screen height and centered content -->
  <div
    class="dark:bg-gray-900 dark:text-gray-100 flex flex-col items-center justify-center px-6 py-20"
  >
    <!-- Logo at the top -->
    <img src="@/assets/logo.png" alt="Logo" class="h-28 mb-6" />

    <!-- Page title -->
    <h1 class="text-5xl font-bold mb-4">T2Vtuber</h1>
    <p class="text-2xl text-gray-400 mb-8">Login to use T2Vtuber</p>

    <!-- Login form container -->
    <div class="w-full max-w-md">
      <!-- Email input -->
      <div class="mb-6 relative flex items-center">
        <span class="absolute left-4">
          <!-- Email icon -->
          <svg class="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 8.43L12.71 13.53C12.08 13.98 11.32 13.98 10.7 13.53L4 8.43V6L12 11L20 6V8.43Z"
            />
          </svg>
        </span>
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          class="w-full pl-12 pr-4 py-4 text-xl text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Password input -->
      <div class="mb-8 relative flex items-center">
        <span class="absolute left-4">
          <!-- Lock icon -->
          <svg class="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C9.79 2 8 3.79 8 6V8H7C5.89 8 5 8.89 5 10V19C5 20.11 5.89 21 7 21H17C18.11 21 19 20.11 19 19V10C19 8.89 18.11 8 17 8H16V6C16 3.79 14.21 2 12 2ZM10 8V6C10 4.9 10.9 4 12 4C13.1 4 14 4.9 14 6V8H10ZM17 19H7V10H17V19Z"
            />
          </svg>
        </span>
        <input
          type="password"
          v-model="password"
          placeholder="Secret"
          class="w-full pl-12 pr-4 py-4 text-xl text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Submit button -->
      <button
        class="w-full bg-gray-800 dark:bg-gray-700 text-white text-xl font-bold py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
      >
        enter >
      </button>

      <!-- Links below the button -->
      <div class="flex justify-between text-lg text-gray-400">
        <a href="/setup" class="text-blue-500 hover:underline">Go sign up</a>
        <a href="#" class="text-blue-500 hover:underline">Terms of Service & Privacy Policy</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles if necessary */
</style>
