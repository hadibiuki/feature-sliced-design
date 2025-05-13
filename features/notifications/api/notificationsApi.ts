import type { Notification } from '@entities/notification/model/types'

export const getNotifications = async (): Promise<Notification[]> => {
  // Simulate fetch
  return await $fetch('/api/notifications')
}
