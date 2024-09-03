<script setup lang="ts">
// Import statements or any necessary Vue setup
</script>

<template>
  <!-- Main container without min-height to reduce top margin -->
  <div
    class="dark:bg-gray-900 dark:text-gray-100 flex flex-col items-center justify-center px-4 py-8 mx-auto"
  >
    <!-- Title and description -->
    <h1 class="text-5xl font-bold mb-12">T2Vtuber Plans</h1>
    <!-- Increased font size for the title and bottom margin -->
    <p class="text-xl text-gray-400 text-center mb-16">
      <!-- Increased font size for the description and bottom margin -->
      T2Vtuber plans allow you to generate more and faster, and gives you access to more Pro
      features.
    </p>

    <!-- Pricing boxes container -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-32 max-w-screen-xl w-5/6 mx-auto">
      <!-- Increased gap for more spacing between boxes -->

      <!-- Plan 1: Free -->
      <div
        class="bg-gradient-to-t from-black via-gray-800 to-gray-900 rounded-lg p-8 text-white shadow-lg flex-1 max-w-md flex flex-col justify-between"
      >
        <h2 class="text-3xl font-bold mb-4">Free</h2>
        <!-- Increased font size for the plan title -->
        <p class="text-2xl mb-6">¥0 /month</p>
        <!-- Increased font size for the plan price -->
        <ul class="space-y-4 mb-6 text-lg">
          <!-- Increased font size for the list items -->
          <li>✓ Free daily generations</li>
          <li>✓ Limited access to T2Vtuber tools</li>
        </ul>
        <button class="bg-white text-black font-bold py-2 px-4 rounded-full">Select Plan</button>
      </div>

      <!-- Plan 2: Basic -->
      <div
        class="bg-gradient-to-t from-teal-900 via-teal-800 to-teal-600 rounded-lg p-8 text-white shadow-lg flex-1 max-w-md flex flex-col justify-between"
      >
        <h2 class="text-3xl font-bold mb-4">Basic</h2>
        <!-- Increased font size for the plan title -->
        <p class="text-2xl mb-6">¥30 /month</p>
        <!-- Increased font size for the plan price -->
        <ul class="space-y-4 mb-6 text-lg">
          <!-- Increased font size for the list items -->
          <li>✓ ~36,000 real-time images</li>
          <li>✓ ~120 enhanced images</li>
          <li>✓ ~200 videos</li>
          <li>✓ Full access to T2Vtuber tools</li>
        </ul>
        <button class="bg-white text-black font-bold py-2 px-4 rounded-full">Select Plan</button>
      </div>

      <!-- Plan 3: Pro -->
      <div
        class="bg-gradient-to-t from-blue-900 via-blue-800 to-blue-600 rounded-lg p-8 text-white shadow-lg flex-1 max-w-md flex flex-col justify-between"
      >
        <h2 class="text-3xl font-bold mb-4">Pro</h2>
        <!-- Increased font size for the plan title -->
        <p class="text-2xl mb-6">¥50 /month</p>
        <!-- Increased font size for the plan price -->
        <ul class="space-y-4 mb-6 text-lg">
          <!-- Increased font size for the list items -->
          <li>✓ ~540,000 real-time images</li>
          <li>✓ ~1,800 enhanced images</li>
          <li>✓ ~3,000 videos</li>
          <li>✓ Full access to T2Vtuber tools</li>
          <li>✓ Early access to new features</li>
        </ul>
        <button class="bg-white text-black font-bold py-2 px-4 rounded-full">Select Plan</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles if necessary */
</style>
