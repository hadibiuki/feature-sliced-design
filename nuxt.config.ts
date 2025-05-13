// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: 'https://i.pravatar.cc',
    },
  },
  plugins: ['~/plugins/logger.ts', '~/plugins/toast.ts', '~/plugins/theme.ts'],
  alias: {
    // Example aliases
    '~/entities': './entities',
    '~/shared': './shared',
    '~/features': './features',
    // '@utils': '/<absolute-path-to>/utils',
  },
})
