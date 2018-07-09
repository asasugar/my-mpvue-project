<template>
  <div class="index">
    <zpCard text="父传子的值" />
  </div>
</template>

<script>
import zpCard from '@/components/zpCard/zpCard'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  components: {
    zpCard
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    this.getList()
  },
  methods: {
    async getList () {
      const data = await this.$http({ method: 'post', url: '/api/htmlModuleManage/seachByNo', data: { 'htmlModuleManage.htmlNo': 'WAP_BANNER' } })
      console.log(data)
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
  }
}
</script>

<style scoped lang="scss">
.index {
}
</style>
