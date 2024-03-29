import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ComicView from '@/views/ComicView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/comic/:comicId',
    name: 'Comic',
    component: ComicView,
    props: true
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
