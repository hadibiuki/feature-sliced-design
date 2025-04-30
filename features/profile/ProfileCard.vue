<template>
  <div class="p-4 border rounded">
    <img :src="user.avatarUrl" alt="User Avatar" class="w-24 h-24 rounded-full" />
    <h2 class="text-xl font-bold">{{ user.name }}</h2>
    <p class="text-gray-600">{{ user.bio }}</p>
    <SharedUiButton text="Edit Profile" />
  </div>
</template>

<script setup lang="ts">
import SharedUiButton from '~/shared/ui/Button.vue'
import type { User } from '~/entities/user/model'
import { getUserProfile } from '~/shared/api/userApi'

const user = ref<User>(getUserProfile())

</script>
