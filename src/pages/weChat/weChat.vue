<template>
  <div class="index">
    <painter :customStyle="customStyle" :imgOK="onImgOk" :palette="template" />
    <button style="margin-top:40rpx" @click="save">保存</button>
  </div>
</template>

<script>
import Canvas from './canvas.js'


export default {
  data () {
    return {
      customStyle: ['margin-left:40rpx', 'margin-bottom:40rpx'],//canvas初始样式
      template: new Canvas().palette()
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    save () {
      console.log('on save click')
    },
    onImgOK (e) {
      console.log(11111)

      console.log(e)
    }
  }
}
</script>

<style scoped lang="scss">
.index {
}
</style>
