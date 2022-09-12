import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '../views/public'
import * as Admin from '../views/admin'

const routes = [

  {
    path: '/',
    name: 'public',
    component: Public.PublicLayout,
    children: [
      { path: '', name: 'home', component: Public.Home },
      { path: 'contact', name: 'contact', component: Public.Contact },
      { path: 'team', name: 'team', component: Public.Team },
      { path: 'history', name: 'history', component: Public.History }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin.AdminLayout,
    children: [
      { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard }
    ]
  },
  {
    //404
    path: '/:pathMatch(.*)*',
    component: Public.NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
