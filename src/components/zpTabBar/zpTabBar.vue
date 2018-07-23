<template>
  <div class="zp-tabBar">
    <p v-for="(item,index) in tabBar" :key="index" @click="goPage(item.pagePath,index)" :class="{active:global.tabIndex===index}">
      <i class="iconfont" v-if="index===0">&#xe600;</i>
      <i class="iconfont" v-else-if="index===1">&#xe60e;</i>
      <i class="iconfont" v-else-if="index===2">&#xe613;</i>
      <i class="iconfont" v-else>&#xe617;</i>
      {{item.text}}
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      activeNum: 0,
    }
  },
  computed: {
    ...mapState([
      'global'
    ])
  },
  props: {
    tabBar: {
      type: Array,
      default: [
        { text: '微信', pagePath: '/pages/weChat/main' },
        { text: '通讯录', pagePath: '/pages/contact/main' },
        { text: '发现', pagePath: '/pages/discovery/main' },
        { text: '我', pagePath: '/pages/my/main' }
      ]
    },
    text: String
  },
  methods: {
    ...mapActions(['setTabIndex']),
    goPage (pageUrl, index) {
      this.setTabIndex(index);
      wx.switchTab({
        url: `${pageUrl}`
      });
    }
  }
}
</script>

<style lang="scss">
.zp-tabBar {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  height: 100rpx;
  border-top: 1rpx solid #e5e5e5;
  p {
    padding: 10rpx 0 0;
    font-size: 22rpx;
    color: #666;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  image {
    width: 40rpx;
    height: 40rpx;
  }
  .active {
    color: #1aad19;
  }
}
</style>
