<!-- features/notifications/ui/NotificationsBell.vue -->
<template>
  <div class="bell" @click="toggleOpen">
    🔔
    <span v-if="unreadCount > 0" class="count">{{ unreadCount }}</span>

    <div v-if="open" class="dropdown">
      <NotificationItem v-for="n in notifications" :key="n.id" :notification="n" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNotifications } from '../model/useNotifications'
import NotificationItem from '@entities/notification/ui/NotificationItem.vue'

const { notifications, unreadCount } = useNotifications()
const open = ref(false)
const toggleOpen = () => (open.value = !open.value)
</script>

<style scoped>
.bell {
  position: relative;
  cursor: pointer;
}
.count {
  background: red;
  color: white;
  padding: 2px 5px;
  border-radius: 50%;
  font-size: 0.8rem;
  position: absolute;
  top: -4px;
  right: -4px;
}
.dropdown {
  position: absolute;
  right: 0;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 250px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 100;
}
</style>
