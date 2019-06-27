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
  initSystemPara (state,info) {
    //http://localhost:19433/webApi.asmx/getSysConfigPara
    HttpUtils.post('getSysConfigPara', info).then(
      function (resp) {
        console.log("getSysConfigPara:",resp);
      }
    );
  },
  initAuth(state,info){
    //
    console.log("initAuth");
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
  init (context) {
    context.commit('initSystemPara')
    context.commit('initAuth')
  }
}

// Export module
export default {
  state,
  getters,
  mutations,
  actions
}
