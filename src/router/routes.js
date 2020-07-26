
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('layouts/Login.vue'),
    children: [
      { path: '', name:'login' , component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('layouts/Register.vue'),
    children: [
      { path: '', name:'register' , component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'Survey' , component: () => import('pages/Survey.vue') }
    ]
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'Feed' , component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/detail',
    name: 'detail_page',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'Detail' ,  component: () => import('pages/Item.vue'), props: true}
    ]
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'내가 한 설문' ,  component: () => import('pages/My.vue'), props: true}
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
