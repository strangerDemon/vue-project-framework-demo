import HttpUtils  from '../../utils/httpUtils/axiosUtils'
/**
 * 变量参数
 */
const state = {}

/**
 * Getters
 * @type {Object}
 */
const getters = {}

/**
 * Mutations
 *
 * @type {Object}
 */
const mutations = {
  init (state,info) {
    HttpUtils.post('getSysConfigPara', info).then(
      function (resp) {
        console.log("getSysConfigPara:",resp);
      }
    );
  },
  query(state,info){
    console.log("query！")
  }
}

/**
 * Actions
 * @type {Object}
 */
const actions = {
  test (context) {
    context.commit('init')
    context.commit('query',{})
  }
}

// Export module
export default {
  state,
  getters,
  mutations,
  actions
}
