import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./actions";
import mutations from "./mutations";
import * as modules from "./modules";


//use vuex
Vue.use(Vuex);
/**
 * 变量参数
 */
const state = {
}

/**
 * Getters
 * @type {Object}
 */
const getters = {}


// Export module
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
