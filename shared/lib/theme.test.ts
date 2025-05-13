import { createTheme } from './theme'
import { vi, describe, it, expect, afterEach } from 'vitest'

describe('Theme', () => {
  const getAttr = vi.spyOn(document.documentElement, 'getAttribute')
  const setAttr = vi.spyOn(document.documentElement, 'setAttribute')

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('returns "light" if no theme is set', () => {
    getAttr.mockReturnValue(null)
    const theme = createTheme()
    expect(theme.getCurrentTheme()).toBe('light')
  })

  it('returns current theme if set', () => {
    getAttr.mockReturnValue('dark')
    const theme = createTheme()
    expect(theme.getCurrentTheme()).toBe('dark')
  })

  it('toggles from dark to light', () => {
    getAttr.mockReturnValue('dark')
    const theme = createTheme()
    theme.toggle()
    expect(setAttr).toHaveBeenCalledWith('data-theme', 'light')
  })

  it('toggles from light to dark', () => {
    getAttr.mockReturnValue('light')
    const theme = createTheme()
    theme.toggle()
    expect(setAttr).toHaveBeenCalledWith('data-theme', 'dark')
  })
})
