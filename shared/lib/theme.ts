export const createTheme = () => ({
  getCurrentTheme: (): string => document.documentElement.getAttribute('data-theme') || 'light',

  toggle: (): void => {
    const current = document.documentElement.getAttribute('data-theme')
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
  },
})
