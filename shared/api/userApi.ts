// export const getUserProfile = () => {
//   return {
//     id: 1,
//     name: 'Jane Doe',
//     bio: 'Senior Frontend Engineer',
//     avatarUrl: `${apiBase}/150?img=5`,
//   }
// }

export const getUserProfile = () => {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase
  return {
    id: 1,
    name: 'Jane Doe',
    bio: 'Senior Frontend Engineer',
    avatarUrl: `${apiBase}/150?img=5`,
  }
}
