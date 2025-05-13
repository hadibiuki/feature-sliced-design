export const createToaster = () => ({
  success: (message: string) => {
    if (typeof window !== 'undefined') {
      window.alert(`✅ Success: ${message}`)
    }
  },
  error: (message: string) => {
    if (typeof window !== 'undefined') {
      window.alert(`❌ Error: ${message}`)
    }
  },
  info: (message: string) => {
    if (typeof window !== 'undefined') {
      window.alert(`ℹ️ Info: ${message}`)
    }
  },
})
