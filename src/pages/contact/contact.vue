<template>
  <div class="contact">
    <div class="weui-cells__title">带图标、说明的列表项</div>
    <div class="weui-cells weui-cells_after-title">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <image :src="htmlText.imgUrl" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;" />
        </div>
        <div class="weui-cell__bd">{{data.htmlName}}</div>
        <div class="weui-cell__ft">{{data.htmlNo}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      data: {},
      htmlText: {}
    }
  },
  components: {
  },
  created () {
    // 调用应用实例的方法获取全局数据
  },
  mounted () {
    // this.getList()
  },
  methods: {
    async getList () {
      this.data = await this.$http({ method: 'post', url: '/api/htmlModuleManage/seachByNo', data: { 'htmlModuleManage.htmlNo': 'WAP_BANNER' } })
      this.htmlText = JSON.parse(this.data.htmlText)
    },
  }
}
</script>

<style scoped lang="scss">
.contact {
}
</style>
