//login branch

import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '../views/public'
import * as Admin from '../views/admin'
import Login from '../views/auth/Login.vue'

//import avec crochet car export function
import { authGuard } from '../_helpers/auth-guard'


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
      { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },
      { path: 'user/add', component: Admin.UserAdd },
      { path: 'user/edit/:id(\\d+)', component: Admin.UserEdit, props: true },
      { path: 'user/index', component: Admin.UserIndex },
      { path: '/:pathMatch(.*)*', redirect: '/admin/dashboard' }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
    //,
    //beforeEnter pour fermer une mono route, pas les enfants
    //beforeEnter: authGuard
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


//Vérouillage de la partie admin.
router.beforeEach((to, from, next) => {
  console.log(to.matched[0].name)
  if (to.matched[0].name == 'admin') {
    authGuard()
  }
  next()
})

export default router
