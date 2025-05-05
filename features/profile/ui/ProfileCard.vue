<template>
  <div v-if="pending">Loading profile...</div>
  <div v-else-if="error">Failed to load profile 😓</div>
  <div v-else>
    <img :src="user?.avatarUrl" />
    <h2>{{ user?.name }}</h2>
    <p>{{ user?.bio }}</p>
  </div>
  
</template>

<script setup lang="ts">
import { useUser } from '../../../entities/user/useUser'

const { data: user, pending, error } = await useUser()
</script>
