import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/IndexView'
import NotFound from '@/views/NotFoundView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    }
  ]
})
