<template>
  <div class="index">
    <div class="weui-cells__title">带图标、说明的列表项</div>
    <div class="weui-cells weui-cells_after-title">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;" />
        </div>
        <div class="weui-cell__bd">标题文字</div>
        <div class="weui-cell__ft">说明文字</div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;" />
        </div>
        <div class="weui-cell__bd">标题文字</div>
        <div class="weui-cell__ft">说明文字</div>
      </div>
    </div>
  </div>
</template>

<script>
import zpCard from '@/components/zpCard/zpCard'

export default {
  data () {
    return {
    }
  },
  components: {
    zpCard
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getList()
  },
  mounted () {

  },
  methods: {
    async getList () {
      const data = await this.$http({ method: 'post', url: '/api/htmlModuleManage/seachByNo', data: { 'htmlModuleManage.htmlNo': 'WAP_BANNER' } })
    }
  }
}
</script>

<style scoped lang="scss">
.index {
}
</style>
