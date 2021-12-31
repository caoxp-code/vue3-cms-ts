import { RouteRecordRaw } from 'vue-router'
import components from './router.components'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: components['login'],
  },
  {
    path: '/',
    name: 'home',
    component: components['home'],
  },
]
export default routes
