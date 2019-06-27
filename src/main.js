// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

//引入element
Vue.use(ElementUI);

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})

app.$mount('#app')
