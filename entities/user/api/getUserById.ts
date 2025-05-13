import type { User } from '../model/types'

export const getUserById = (id: number): Promise<User> => {
  return $fetch(`/api/user/${id}`)
}
