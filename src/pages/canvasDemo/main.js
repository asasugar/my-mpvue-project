import Vue from 'vue'
import App from './canvasDemo'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: 'canvasDemo',
    usingComponents: {
      painter: '/static/painter/painter'
    }
  }
}
