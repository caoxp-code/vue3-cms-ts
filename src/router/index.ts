import { createRouter, createWebHistory } from 'vue-router'
import routes from './router.config'

export default createRouter({
  history: createWebHistory(),
  routes,
})
