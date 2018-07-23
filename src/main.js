import Vue from 'vue'
import App from './App'
import store from 'store'
import request from 'utils/js/request'
import 'mpvue-weui/src/css/weui/weui.css'
require('core-js/library/modules/_global.js').console = console //解决mpvue下不显示错误信息
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$http = request

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/weChat/main'],
    window: {
      navigationBarBackgroundColor: '#000',
      navigationBarTextStyle: 'light'
    },
    tabBar: {
      color: '#8a8a8a',
      selectedColor: '#1AAD19',
      list: [
        {
          pagePath: 'pages/weChat/main',
          text: '微信',
          iconPath: '/static/WeChat.png',
          selectedIconPath: '/static/WeChat1.png'
        },
        {
          pagePath: 'pages/contact/main',
          text: '通讯录',
          iconPath: '/static/nav_contacts.png',
          selectedIconPath: '/static/nav_contacts1.png'
        },
        {
          pagePath: 'pages/discovery/main',
          text: '发现',
          iconPath: '/static/discovery.png',
          selectedIconPath: '/static/discovery1.png'
        },
        {
          pagePath: 'pages/my/main',
          text: '我',
          iconPath: '/static/me.png',
          selectedIconPath: '/static/me1.png'
        }
      ]
    },
    onReachBottomDistance: 50
  },
  debug: true
}
