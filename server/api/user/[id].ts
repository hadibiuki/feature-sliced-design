export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  const users = {
    '1': {
      id: 1,
      name: 'Ali Developer',
      bio: 'ali@example.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
    },
    '2': {
      id: 2,
      name: 'Sara Engineer',
      bio: 'sara@example.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
    },
    '3': {
      id: 3,
      name: 'Margo Designer',
      bio: 'margo@example.com',
      avatarUrl: `https://i.pravatar.cc/150?img=${id}`,
    },
  }
  const user = users[id as keyof typeof users] || users['3']
  if (!user) {
    throw createError({ statusCode: 404, message: 'User not found' })
  }
  return user
})
