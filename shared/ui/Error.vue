<template>
  <div class="text-red-500 p-4 bg-red-100 border border-red-300">⚠️ {{ message }}</div>
</template>

<script setup lang="ts">
defineProps<{ message: string }>()
</script>
