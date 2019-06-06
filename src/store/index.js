import Vue from 'vue'
import Vuex from 'vuex'

import demo from './modules/demo'


//use vuex
Vue.use(Vuex);


// Export module
export default new Vuex.Store({
  modules:{
    demo
  }
})
