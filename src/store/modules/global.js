const state = {
  tabIndex: 0
}

// getters可以认为是store的计算属性[有缓存]
const getters = {}

// mutations与事件注册类似，更改state[同步],写常量的形式
const mutations = {
  SETTABINDEX(state, val) {
    state.tabIndex = val
  }
}

// actions提交的是 mutation，而不是直接变更状态[异步]
const actions = {
  setTabIndex({ commit }, val) {
    commit('SETTABINDEX', val)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
