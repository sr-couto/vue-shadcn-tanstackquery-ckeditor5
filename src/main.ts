import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router.ts';
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';
import { VueQueryPlugin } from '@tanstack/vue-query'
import { MotionPlugin } from '@vueuse/motion'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './assets/index.css';

const pinia = createPinia()
const app = createApp(App)

pinia.use(piniaPluginPersistedstate)

app.use(VueQueryPlugin, {
  enableDevtoolsV6Plugin: true,
})
app.use(CkeditorPlugin)
app.use(MotionPlugin)
app.use(router)
app.use(pinia)
app.mount('#app')