# my-mpvue-project

> A Mpvue project

* 彻底的组件化开发能力：提高代码复用性

* 完整的 Vue.js 开发体验

* 方便的 Vuex 数据管理方案：方便构建复杂应用

* 快捷的 webpack 构建机制：自定义构建策略、开发阶段 hotReload

* 支持使用 npm 外部依赖

* 使用 Vue.js 命令行工具 vue-cli 快速初始化项目

## 前端开发规范

* 页面开发将 css、js 放置在同一个文件夹下
* 组件开发也新建一个文件夹统一采用小驼峰法`zpXxx`命名
* 样式每个页面都加上`scoped`避免命名冲突造成样式污染
* 样式统一采用中划线命名法，形如`this-is-an-apple`
* 公共样式已全局引入，且常量命名采用全部大写，如：`$WHITE`

## 文档地址

* [vue](https://cn.vuejs.org).
* [mpvue](http://mpvue.com/mpvue/).
* [flyio](https://wendux.github.io/dist/#/doc/flyio/wx)

## mpvue 注意点

* 路由跳转

mpvue 中只需要用 a 标签

```
<a href="/page/counter/main?text=123">
```

同时也可以使用小程序自身提供的 api 完成页面跳转

```
wx.navigateTo({
   url: `/pages/counter/main?text=${this.text}`
 });
```

* 数据绑定

建议开发过程中直接使用

* [微信小程序：表单组件](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)

v-model.lazy 代替 v-model

* 弹出层滚动穿透

滚动弹出层里的内容，后面的内容也跟着滚动(解决方式)

```
<scroll-view :scroll-y="scroll" style="height:200px" scroll-with-animation="true">
.....
<-- 弹出层 -->
 <div class="layer">
  ....
 </div>

</scroll-view>
```

点击弹窗按钮时，把 scroll 设置为 false。 点击关闭按钮时，再把 scroll 设置为 true 。同时设置 body 的样式

```
body{
    overflow-y: hidden;
    height: 100%;
}
```

## 采用 Sass

* css 预处理(Sass)，\*[为什么使用 Sass 而不是 Less?](https://www.cnblogs.com/roashley/p/7731865.html)

## ajax 使用

```
import request from 'utils/js/request.js'
export default {
  name: 'HelloWorld',
  mounted () {
    this.getList()
  },
  methods: {
    async getList () {
      const data = await request({ method: 'post', url: '/api/htmlModuleManage/seachByNo', data: { 'htmlModuleManage.htmlNo': 'WAP_BANNER' } })
      console.log(data)
    }
  }
}
```
