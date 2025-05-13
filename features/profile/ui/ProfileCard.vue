<template>
  <div class="p-4 border rounded shadow-md">
    <UserAvatar :user="user" />
    <h2 class="text-xl font-bold mt-2">{{ user.name }}</h2>
    <p class="text-gray-500">{{ user.bio }}</p>
  </div>
</template>

<script setup lang="ts">
import type { User } from '~/entities/user/model/types'
import UserAvatar from '@/entities/user/ui/useAvatar.vue'
defineProps<{
  user: User
}>()
</script>
