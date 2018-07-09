const state = {
  name: '我是你鸡哥',
  age: 22
}

// getters可以认为是store的计算属性[有缓存]
const getters = {}

// mutations与事件注册类似，更改state[同步],写常量的形式
const mutations = {
  GETUSERINFO(state) {
    const userInfo = {
      name: '我是vuex过后的名字',
      age: 22
    }
    state = userInfo
  }
}

// actions提交的是 mutation，而不是直接变更状态[异步]
const actions = {
  getUserInfo({ commit }) {
    commit('GETUSERINFO')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
