import { defineNuxtPlugin } from '#app'
import { createToaster } from '~/shared/lib/toast'

export default defineNuxtPlugin(() => {
  const toast = createToaster()
  return {
    provide: {
      toast,
    },
  }
})
