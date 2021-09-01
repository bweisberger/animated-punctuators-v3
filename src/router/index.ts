import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ComicView from '@/views/ComicView.vue';
import About from '@/views/About.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Comic',
    component: ComicView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/comic-again',
    name: 'ComicAgain',
    // route level code-splitting
    // this generates a separate chunk (comic.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // just a placeholder for now, but cool moving forward
    component: () => import(/* webpackChunkName: "comic" */ '../views/ComicView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
