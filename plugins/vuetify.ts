import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { VDataTable } from 'vuetify/labs/VDataTable'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: false,
    blueprint: md3,
    components: {
      VDataTable,
    },
    theme: {
      defaultTheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light',
      themes: {
        dark: {
          colors: {
            // primary: '#00DC82',
            primary: '#26a69a',
            accent: '#0E2934',
            secondary: '#FF8F00',
            info: '#26A69A',
            warning: '#FFC107',
            error: '#DD2C00',
            success: '#00E676'
          }
        },
        light: {
          dark: false,
          colors: {
            primary: '#26a69a',
            accent: '#424242',
            secondary: '#fc6758',
            info: '#26A69A',
            warning: '#FFC107',
            error: '#DD2C00',
            success: '#2CAE66',
            greylight: '#E7ECF5'
          }
        },
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})