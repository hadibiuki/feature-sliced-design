import { mount } from '@vue/test-utils'
import ProfileCard from './ProfileCard.vue'
import { describe, it, expect, vi } from 'vitest'

vi.mock('../../api/userApi', () => ({
  getUserProfile: () =>
    Promise.resolve({
      id: 1,
      name: 'Test User',
      bio: 'Test Bio',
      avatarUrl: '',
    }),
}))

describe('ProfileCard', () => {
  it('renders user name', async () => {
    const wrapper = mount(ProfileCard)
    await new Promise((resolve) => setTimeout(resolve)) // wait for async
    expect(wrapper.text()).toContain('Test User')
  })
})
