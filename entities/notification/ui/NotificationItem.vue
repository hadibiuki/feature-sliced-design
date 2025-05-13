<template>
  <div :class="['p-2 rounded', notification.read ? 'opacity-60' : 'font-bold']">
    {{ notification.title }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  notification: {
    title: string
    read: boolean
  }
}>()
</script>
