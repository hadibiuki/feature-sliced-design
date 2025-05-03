import type { User } from '~/entities/user/model'

export const getUserProfile = (): Promise<User> => $fetch('/api/user')
