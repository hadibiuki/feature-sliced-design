// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  components: [
    {
      path: '~/shared/ui',
      pathPrefix: false,
    },
  ],
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: 'https://i.pravatar.cc',
    },
  },
  plugins: ['~/plugins/logger.ts', '~/plugins/toast.ts', '~/plugins/theme.ts'],
  alias: {
    '@shared': '/shared',
    '@entities': '/entities',
    '@features': '/features',
    '@processes': '/processes',
  },
})
