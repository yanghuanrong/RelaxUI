<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">checkbox 多选框</h4>
        <p class="page-title-decs">多选框</p>
      </div>
    </div>
    <div class="card-box">
      <span @click="fn">
        <Checkbox v-model="checked" label="卧槽" @change="fv" />
      </span>
      <Checkbox @change="fv" />
      {{this.checked ? '选中' : '取消'}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false
    }
  },
  methods: {
    fv (e) {
      console.log('change 回调', e)
    },
    fn (a) {
      console.log('span 点击')
    }
  }
}
</script>
