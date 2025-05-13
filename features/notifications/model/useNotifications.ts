import { ref, onMounted } from 'vue'
import { getNotifications } from '../api/notificationsApi'
import type { Notification } from '@entities/notification/model/types'

export function useNotifications() {
  const notifications = ref<Notification[]>([])
  const isLoading = ref(false)

  const fetchNotifications = async () => {
    isLoading.value = true
    notifications.value = await getNotifications()
    isLoading.value = false
  }

  const unreadCount = computed(() => notifications.value.filter((n) => !n.read).length)

  onMounted(fetchNotifications)

  return {
    notifications,
    unreadCount,
    isLoading,
  }
}
