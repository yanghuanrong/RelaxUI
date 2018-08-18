<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">checkbox 多选框</h4>
        <p class="page-title-decs">多选框</p>
      </div>
    </div>
    <div class="card-box">
      <Checkbox v-model="checked" label="卧槽" />
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
    fv () {
      console.log(1)
    },
    fn (a) {
      console.log(a)
      console.log(this.checked)
    }
  }
}
</script>
