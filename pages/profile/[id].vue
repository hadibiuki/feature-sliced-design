<template>
  <div class="p-4">
    <Loader v-if="userStore.loading" />
    <Error v-else-if="userStore.error" :message="userStore.error" />
    <ProfileCard v-else-if="userStore.user" :user="userStore.user" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useUserStore } from '@/entities/user/model/useUserStore'
import { ProfileCard } from '@/processes/view-profile'
const route = useRoute()
const userStore = useUserStore()

await userStore.fetchUser(Number(route.params.id))
</script>
