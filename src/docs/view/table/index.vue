<template lang="html">
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Table 表格</h4>
        <p class="page-title-decs">表格用来展示批量列表数据</p>
      </div>
    </div>
    <div class="components-button-demo">
    <RelaxTag name="用法">
      <template slot="temp">
        <xTable></xTable>
      </template>
      <template slot="desc">
        按钮可以根据<i>type</i>来设置不同的颜色，提供了6种类型的按钮<i>primary</i><i>success</i><i>info</i><i>danger</i><i>warning</i>
      </template>
      <textarea slot="code">
        <template>
          <x-button>default</x-button>
          <x-button type='primary'>primary</x-button>
          <x-button type='success'>success</x-button>
          <x-button type='info'>info</x-button>
          <x-button type='danger'>danger</x-button>
          <x-button type='danger'>danger</x-button>
          <x-button type='warning'>warning</x-button>
        </template>
      </textarea>
    </RelaxTag>
</div>
  
  <div class="relax-document">
    <div class="document-title">
      <h4>API</h4>
    </div>
    <table class="document-api">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>设置按钮类型，可选值为 primary success info danger warning</td>
          <td>string</td>
          <td>-</td>
        </tr>
        <tr>
          <td>plain</td>
          <td>设置按钮镂空状态</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>设置按钮载入状态</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>round</td>
          <td>设置按钮圆角状态</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>按钮失效状态</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>设置按钮尺寸, 可选值为 sm lg</td>
          <td>string</td>
          <td>-</td>
        </tr>
        <tr>
          <td><span>icon</span></td>
          <td>设置按钮的图标类型</td>
          <td>string</td>
          <td>-</td>
        </tr>
        <tr>
          <td>block</td>
          <td>将按钮宽度调整为其父宽度的选项</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <div class="document-title">
      <h4>事件</h4>
    </div>
    <table class="document-event">
      <thead>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调函数</th>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>点击按钮时的回调</td>
          <td>(event) => void</td>
        </tr>
      </tbody>
    </table>
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
    enterLoading(){
      this.loading = true

      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
