import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style/global.scss'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: require('./home.vue').default }
  ]
})
const app = createApp(App)

app.use(router)

app.mount('#app')