import { defineStore } from 'pinia'
import { getUserById } from '~/features/profile/api/userApi'
import type { User } from './types'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    loading: false,
    error: null as null | string,
  }),
  actions: {
    async fetchUser(id: number) {
      this.loading = true
      this.error = null
      try {
        const user = await getUserById(id)
        this.user = { ...user }
      } catch (e: unknown) {
        this.error = e instanceof Error ? e.message : 'Failed to fetch user'
      } finally {
        this.loading = false
      }
    },
  },
})
