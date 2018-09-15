var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
// 添加请求拦截器
fly.interceptors.request.use(config => {
  wx.showLoading()
  return config
})
// 配置请求基地址
fly.config.baseURL = 'https://m.oteao.com'
// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  res => {
    wx.hideLoading()
    // 将请求结果返回
    if (res.data.success) {
      return res.data.data
    } else {
      console.log(res.data.errorMsg)
    }
  },
  err => {
    wx.hideLoading()
    // 发生网络错误后会走到这里
    return Promise.resolve(err)
  }
)

const request = (
  { url = '', data = {}, method = 'get' } = {},
  otherConfig = {}
) => {
  let config = {
    url,
    body:data,
    method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    ...otherConfig
  }

  Object.assign(config, otherConfig)
  return fly.request(config)
}
export default request
