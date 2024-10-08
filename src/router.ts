import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/modules/app/views/HomeView.vue')
  },

  // Ticketera

  {
    path: '/stadistics',
    name: 'stadistics',
    component: () => import('@/modules/stadistics/views/StadisticsView.vue')
  },

  // User

  {
    path: '/change-user',
    name: 'change-user',
    component: () => import('@/modules/app/views/ChangeUserName.vue')
  },

  // Articles
  {
    path: '/editar-articulos',
    name: 'articles-new',
    component: () => import('@/modules/articles/views/ArticlesEditor.vue')
  },

  {
    path: '/articulos/',
    name: 'articles-all',
    component: () => import('@/modules/articles/views/ArticlesList.vue')
  },

  {
    path: '/articulos/:id',
    name: 'article-show',
    component: () => import('@/modules/articles/views/ArticlesSingle.vue')
  },

  {
    path: '/docs',
    name: 'docs',
    component: () => import('@/modules/app/views/DocsView.vue')
  },

  {
    path: '/datatable',
    name: 'datatable',
    component: () => import('@/modules/app/views/DataTable.vue')
  },
  
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('@/modules/app/views/ChangeUserName.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition)
  //     return savedPosition
  //   else
  //     return { top: 0 }
  // },
});

export default router