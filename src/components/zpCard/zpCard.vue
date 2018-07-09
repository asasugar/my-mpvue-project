<template>
  <div>
    <p class="zp-card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss">
.zp-card {
  color: $RED;
}
</style>
