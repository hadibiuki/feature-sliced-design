// features/notifications/model/useNotifications.test.ts
import { useNotifications } from './useNotifications'
import { vi, describe, it, expect } from 'vitest'

vi.mock('../api/notificationsApi', () => ({
  fetchNotifications: () =>
    Promise.resolve([{ id: 1, title: 'Test', read: false, createdAt: new Date().toISOString() }]),
}))

describe('useNotifications', () => {
  it('fetches notifications and calculates unread count', async () => {
    const { notifications, unreadCount, isLoading } = useNotifications()
    expect(isLoading.value).toBe(true)

    await new Promise((resolve) => setTimeout(resolve, 10)) // wait for async

    expect(notifications.value.length).toBe(1)
    expect(unreadCount.value).toBe(1)
    expect(isLoading.value).toBe(false)
  })
})
