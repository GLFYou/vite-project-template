import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/layout.vue')
const Home = () => import('@/views/home/index.vue')

const routes = [{ path: '/', component: Layout, redirect: '/home', children: [{ path: '/home', component: Home }] }]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
