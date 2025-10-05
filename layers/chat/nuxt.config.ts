// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/mdc'],

  runtimeConfig: {
    openaiApiKey: '',
    public: {
      test: '',
    },
  },

  mdc: {
    highlight: {
      theme: 'dracula',
      langs: ['html', 'markdown', 'vue', 'typescript', 'javascript'],
    },
  },
})
