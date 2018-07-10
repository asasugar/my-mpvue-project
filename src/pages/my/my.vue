<template>
  <div class="my">
    我的
    <!-- <zpCard text="父传子的值" /> -->
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
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.my {
}
</style>
