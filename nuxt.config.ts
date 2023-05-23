import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Nuxt3 Piniatify Starter',
      meta: [
        { name: 'description', content: 'nuxt3 pinia vuetify started' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap'
        }
      ]
    }
  },
  typescript: {
    shim: false
  },
  css: ['@/assets/main.scss'],
  build: {
    transpile: ['vuetify']
  },
  imports: {
    dirs: [
      'stores',
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
      'composables/**'
    ],
  },
  vite: {
    // @ts-ignore
    // curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
    ssr: {
      noExternal: ['vuetify'], // add the vuetify vite plugin
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000/api/',
    },
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        config.plugins ? config.plugins.push(vuetify()) : ''
      })
    }
  ],
  pinia: {
    autoImports: [
      'acceptHMRUpdate',
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  }
})