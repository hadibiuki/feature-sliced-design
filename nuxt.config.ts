// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/eslint'],
  runtimeConfig: {
    public: {
      apiBase: 'https://i.pravatar.cc',
    },
  },
  alias: {
    // Example aliases
    '~/entities': './entities',
    '~/shared': './shared',
    // '@utils': '/<absolute-path-to>/utils',
  },
})
