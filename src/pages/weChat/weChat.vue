<template>
  <div class="index">
    <div class="weui-panel__bd">
      <navigator url="" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active" v-for="(item,index) in userList" :key="index">
        <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
          <image class="weui-media-box__thumb" :src="item.headUrl" />
        </div>
        <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
          <div class="weui-media-box__title">{{item.title}}</div>
          <div class="weui-media-box__desc">{{item.mark}}</div>
        </div>
      </navigator>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      userItem: {
        title: '标题文字1', mark: '说明文字1', headUrl: '/static/boy.png'
      },
      userList: [
        { title: '标题文字', mark: '说明文字', headUrl: '/static/boy.png' },
        { title: '标题文字', mark: '说明文字', headUrl: '/static/boy.png' },
        { title: '标题文字', mark: '说明文字', headUrl: '/static/boy.png' },
        { title: '标题文字', mark: '说明文字', headUrl: '/static/boy.png' },
        { title: '标题文字', mark: '说明文字', headUrl: '/static/boy.png' },
        { title: '标题文字', mark: '说明文字', headUrl: '/static/boy.png' },
        { title: '标题文字', mark: '说明文字', headUrl: '/static/boy.png' },
        { title: '标题文字', mark: '说明文字', headUrl: '/static/boy.png' },
        { title: '标题文字', mark: '说明文字', headUrl: '/static/boy.png' },
        { title: '标题文字', mark: '说明文字', headUrl: '/static/boy.png' },
      ]
    }
  },
  onReachBottom () {
    // 上拉加载更多
    for (let i = 0; i < 5; i++) {
      this.userList.push(this.userItem)
    }
  },
  components: {
  },

  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.index {
}
</style>
