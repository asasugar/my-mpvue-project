import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import userInfo from './modules/userInfo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    global,
    userInfo
  }
})

export default store
