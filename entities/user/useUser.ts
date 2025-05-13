// import { getUserProfile } from '~/features/profile/api/userApi'
import { getUserProfile, getUserById } from '../../features/profile/api/userApi'
import type { User } from './model'

export const useUser = () => {
  return useAsyncData<User>('user-profile', getUserProfile)
}

export const useUserById = (id: number) => {
  return useAsyncData<User>(`user-profile-${id}`, () => getUserById(id))
}
