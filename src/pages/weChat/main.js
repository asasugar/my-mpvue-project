import Vue from 'vue'
import App from './weChat.vue'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    usingComponents: {
      painter: '/static/painter/painter'
    }
  }
}
