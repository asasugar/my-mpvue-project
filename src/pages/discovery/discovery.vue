<template>
  <div class="discovery">
    <div class="weui-cells weui-cells_after-title">
      <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active" v-for="(item,index) in list" :key="index">
        <div class="weui-cell__hd">
          <image :src="item.iconUrl" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
        </div>
        <div class="weui-cell__bd">{{item.title}}</div>
        <div class="weui-cell__ft weui-cell__ft_in-access">{{item.subTitle}}</div>
      </navigator>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      listItem: { iconUrl: '/static/discovery1.png', title: '朋友圈', subTitle: '1' },
    }
  },
  computed: {
    list () {
      let list = [];
      for (let i = 0; i < 20; i++) {
        list.push(this.listItem)
      }
      return list
    }
  },
  components: {
  },
  created () {
    // 调用应用实例的方法获取全局数据
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.discovery {
}
</style>
