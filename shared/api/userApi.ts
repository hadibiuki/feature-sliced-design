// export const getUserProfile = () => {
//   return {
//     id: 1,
//     name: 'Jane Doe',
//     bio: 'Senior Frontend Engineer',
//     avatarUrl: `${apiBase}/150?img=5`,
//   }
// }

export const getUserProfile = async () => {
  return await useAsyncData('user-profile', () => $fetch('/api/user'))
}
