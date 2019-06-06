/**
 * 变量参数
 */
const state = {
  index:0
}

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
  init (state) {
    console.log("链接store成功！init")
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
