import Vue from 'vue'
import App from './App.vue'
import './assets/font/iconfont.css'
import VueRouter from 'vue-router'

import Home from './assets/views/home.vue'
import Message from './assets/views/message.vue'
import Cart from './assets/views/cart.vue'
import Profile from './assets/views/profile.vue'
const routes = [
  {path:'/home',component:Home},
  {path:'/message',component:Message},
  {path:'/cart',component:Cart},
  {path:'/profile',component:Profile},
  {path:'',redirect:'/home'}
]
const router = new VueRouter({
  routes
})
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
