import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import ProfileOne from '../views/ProfileOneView.vue'
import ProfileOneView from '../views/ProfileOneView.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/profile-one', component: ProfileOneView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
