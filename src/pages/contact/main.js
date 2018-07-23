import Vue from 'vue'
import App from './contact.vue'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '通讯录'
  }
}
