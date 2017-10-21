import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  routes:routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
