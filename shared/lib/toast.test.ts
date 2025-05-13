import { vi, describe, it, expect } from 'vitest'
import { createToaster } from './toast'

describe('Toast', () => {
  const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

  const toast = createToaster()

  it('shows success toast', () => {
    toast.success('Data saved')
    expect(alertSpy).toHaveBeenCalledWith('✅ Success: Data saved')
  })

  it('shows error toast', () => {
    toast.error('Something went wrong')
    expect(alertSpy).toHaveBeenCalledWith('❌ Error: Something went wrong')
  })

  it('shows info toast', () => {
    toast.info('You are now logged in')
    expect(alertSpy).toHaveBeenCalledWith('ℹ️ Info: You are now logged in')
  })
})
