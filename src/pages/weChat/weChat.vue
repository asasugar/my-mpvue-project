<template>
  <div class="index">
    <painter :customStyle="customStyle" @imgOK="onImgOk" :palette="template" />
    <button style="margin-top:40rpx" @click="save">保存</button>
  </div>
</template>

<script>
import Canvas from './canvas.js'


export default {
  data () {
    return {
      saveUrl: '',
      customStyle: ['margin-left:40rpx', 'margin-bottom:40rpx'],//canvas初始样式
      template: new Canvas().palette()
    }
  },
  components: {
  },
  created () {

  },
  mounted () {

  },
  methods: {
    save () {
      wx.saveImageToPhotosAlbum({
        filePath: this.saveUrl,
        success () {
          wx.showToast({
            title: '保存成功',
          })
        }
      })
    },
    onImgOk (e) {
      if (!this.saveUrl) {
        this.saveUrl = e.target.path;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.index {
}
</style>
