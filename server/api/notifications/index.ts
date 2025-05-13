export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'New comment on your post',
      read: false,
      createdAt: '2024-01-01T12:00:00Z',
    },
    {
      id: 2,
      title: 'New follower',
      read: true,
      createdAt: '2024-01-02T10:00:00Z',
    },
  ]
})
