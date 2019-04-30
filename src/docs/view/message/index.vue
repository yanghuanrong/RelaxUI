<template lang="html">
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">message 消息</h4>
        <p class="page-title-decs">来自Relax的消息</p>
      </div>
    </div>
    <div  class="components-button-demo">
      <Button type='primary' @click="tips">primary</Button>

  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
    }
  },
  methods: {
    tips(){
      this.$message.info('message 消息')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
