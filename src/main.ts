import './assets/global.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './infrastructure/router/config'
import { vuetifyConfig } from './infrastructure/vuetify/config'
import { i18n } from './infrastructure/i18n/config'

const app = createApp(App)

app.use(i18n);

app.use(router)

app.use(vuetifyConfig);

app.mount('#app')
