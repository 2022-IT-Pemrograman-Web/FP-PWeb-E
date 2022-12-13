import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createAuth0 } from "@auth0/auth0-vue"

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsExample from '@/components/DocsExample'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSpectre from '@devindex/vue-spectre'

const app = createApp(App)

app.use(createAuth0({
    domain: "dev-5pvvajiehcpn55g6.us.auth0.com",
    client_id: "fWx02Uh7TdDFufkOrh3un2U7ymGy2Bxa",

}))
app.use(VueSpectre, { locale: 'en' })
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsExample', DocsExample)

app.mount('#app')