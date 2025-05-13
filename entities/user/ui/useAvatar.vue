<template>
  <img :src="user.avatarUrl" class="rounded-full w-16 h-16" />
</template>

<script setup lang="ts">
import type { User } from '../model/types'

defineProps<{ user: User }>()
</script>
