<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Switch 开关</h4>
        <p class="page-title-decs">开关选择器</p>
      </div>
    </div>
    <div class="components-switch-demo">

    <RelaxTag name="基本用法">
      <template slot="temp">
        <x-switch v-model="status1" @change="change"></x-switch>
        <x-switch v-model="status2"></x-switch>
      </template>
      <template slot="desc">
        切换状态时，触发事件
      </template>
      <textarea slot="code">
        <template>
          <x-switch v-model="status" @change="change"></x-switch>
          <x-switch v-model="status2"></x-switch>
        </template>

        <script>
        export default {
          data(){
            return {
              status1: false,
              status2: true
            }
          },
          methods: {
            change(status){
              this.$message.success('switch状态：' + status)
            }
          }
        }
        </script>
      </textarea>
    </RelaxTag>

    <RelaxTag name="文字和图标">
      <template slot="temp">
        <x-switch>
          <span slot="open">开</span>
          <span slot="close">关</span>
        </x-switch>

        <x-switch>
          <span slot="open">打开</span>
          <span slot="close">关闭</span>
        </x-switch>

        <x-switch>
          <x-icon type="x-icon-check" slot="open" />
          <x-icon type="x-icon-x" slot="close"/>
        </x-switch>
      </template>
      <template slot="desc">
        自定义内容, 建议文字长度保持统一
      </template>
      <textarea slot="code">
        <template>
          <x-switch>
            <span slot="open">开</span>
            <span slot="close">关</span>
          </x-switch>

          <x-switch>
            <span slot="open">打开</span>
            <span slot="close">关闭</span>
          </x-switch>

          <x-switch>
            <x-icon type="x-icon-check" slot="open" />
            <x-icon type="x-icon-x" slot="close"/>
          </x-switch>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="不同色系">
      <template slot="temp">
        <x-switch type="primary"></x-switch>
        <x-switch type="info"></x-switch>
        <x-switch type="danger"></x-switch>
        <x-switch type="success"></x-switch>
      </template>
      <template slot="desc">
        提供了primary info danger success 四种颜色， 默认primary
      </template>
      <textarea slot="code">
        <template slot="temp">
          <x-switch type="primary"></x-switch>
          <x-switch type="info"></x-switch>
          <x-switch type="danger"></x-switch>
          <x-switch type="success"></x-switch>
        </template>
      </textarea>
    </RelaxTag>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      status1: false,
      status2: true
    }
  },
  methods: {
    change(status){
      this.$message.success('switch状态：' + status)
    }
  }
}
</script>