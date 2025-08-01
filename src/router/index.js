import { createRouter, createWebHistory } from 'vue-router'
const NotFound = () => import('../views/layouts/ErrorView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'หน้าแรก' },
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'เกี่ยวกับเรา' },
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/itas',
      name: 'itas',
      meta: { title: 'การประเมินคุณธรรมและความโปร่งใส' },
      component: () => import('../views/ita/ItaView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: { title: 'NotFound Page' },
      component: NotFound,
    },
  ],
})

router.beforeEach((to, from, next) => {
  // document.title = to.meta?.title ?? 'Default Title'
  const titleFromParams = to.meta.title
  if (titleFromParams !== null) {
    document.title = `${to.meta?.title}`
  }
  else {
    document.title = to.meta?.title ?? 'Default Title'
  }
  next();
})

export default router
