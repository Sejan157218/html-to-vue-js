import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Master'
import About from '@/components/Pages/About'
import HomeSlider from '@/components/Pages/HomeSlider'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/slider',
    name: 'HomeSlider',
    component: HomeSlider
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router