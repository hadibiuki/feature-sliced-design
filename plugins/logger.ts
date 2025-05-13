import { defineNuxtPlugin } from '#app'
import { createLogger } from '~/shared/lib/logger'

export default defineNuxtPlugin(() => {
  const logger = createLogger()
  return {
    provide: {
      logger,
    },
  }
})
