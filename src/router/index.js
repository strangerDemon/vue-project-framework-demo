import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/IndexView'
import NotFound from '@/views/NotFoundView'

Vue.use(Router)

let router = new Router({
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
});

/**
 * 每次路由切换都请求一次
 * router.beforeEach 前置守卫
 * router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
 * router.afterEach 后置守卫
 */
router.beforeResolve(function(to, from, next) {
  next();
})

export default router;
