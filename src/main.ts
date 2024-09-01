import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import { createPinia } from 'pinia'
import { VNumberInput } from 'vuetify/labs/components'

const vuetify = createVuetify({
  components:{
    ...components,
    VNumberInput
  },
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

const pinia = createPinia()

createApp(App).use(pinia).use(vuetify).mount('#app')
