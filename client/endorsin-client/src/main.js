import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createAuth0({
    domain: import.meta.env.VITE_AUTH_DOMAIN,
    client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
    redirect_uri: window.location.origin,
}))
app.mount('#app')
