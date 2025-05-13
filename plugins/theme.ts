import { defineNuxtPlugin } from '#app'
import { createTheme } from '~/shared/lib/theme'

export default defineNuxtPlugin(() => {
  const theme = createTheme()

  // Injects the theme control globally
  //   defineNuxtApp(nuxtApp => {
  //     nuxtApp.provide('theme', theme)
  //   })

  return {
    provide: {
      theme,
    },
  }
})
