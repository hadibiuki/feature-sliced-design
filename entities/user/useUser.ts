// import { getUserProfile } from '~/features/profile/api/userApi'
import { getUserProfile } from '../../features/profile/api/userApi'
import type { User } from './model'

export const useUser = () => {
  return useAsyncData<User>('user-profile', getUserProfile)
}
