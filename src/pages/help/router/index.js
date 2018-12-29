import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/help.html',
      name: '帮助',
      component: () => import('@/pages/help/help.vue')
    },
    {
      path: '/',
      name: '帮助',
      redirect: '/help.html'
    }
  ]
})
