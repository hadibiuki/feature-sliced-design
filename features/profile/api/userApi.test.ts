import { getUserProfile } from './userApi'
import { vi, describe, it, expect } from 'vitest'

vi.mock('nuxt/app', () => ({
  $fetch: () =>
    Promise.resolve({
      id: 1,
      name: 'Sarah Biuki',
      bio: 'Senior Nuxt Developer',
      avatarUrl: 'https://i.pravatar.cc/150?img=7',
    }),
}))

describe('getUserProfile', () => {
  it('returns a user object', async () => {
    const user = await getUserProfile()
    expect(user.name).toBe('Sarah Biuki')
  })
})
