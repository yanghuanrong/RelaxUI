<template lang="html">
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Badge 标记</h4>
        <p class="page-title-decs">出现在按钮、图标旁的数字或状态标记</p>
      </div>
    </div>
    <div class="components-badge-demo">
    <RelaxTag name="基础按钮">
      <template slot="temp">
        <x-badge :value="14">
          <x-button plain>default</x-button>
        </x-badge>
        <x-badge :value="2" type="primary">
          <x-button type='primary' plain>primary</x-button>
        </x-badge>
        <x-badge :value="2" type="success">
          <x-button type='success' plain>success</x-button>
        </x-badge>
        <x-badge :value="2" type="info">
          <x-button type='info' plain>info</x-button>
        </x-badge>
        <x-badge :value="2" type="danger">
          <x-button type='danger' plain>danger</x-button>
        </x-badge>
        <x-badge :value="2" type="warning">
          <x-button type='warning' plain>warning</x-button>
        </x-badge>
      </template>
      <template slot="desc">
        按钮可以根据<i>type</i>来设置不同的颜色，提供了5种类型的标记<i>primary</i><i>success</i><i>info</i><i>danger</i><i>warning</i>
      </template>
      <textarea slot="code">
        <template>
          <x-badge :value="14">
            <x-button plain>default</x-button>
          </x-badge>
          <x-badge :value="2" type="primary">
            <x-button type='primary' plain>primary</x-button>
          </x-badge>
          <x-badge :value="2" type="success">
            <x-button type='success' plain>success</x-button>
          </x-badge>
          <x-badge :value="2" type="info">
            <x-button type='info' plain>info</x-button>
          </x-badge>
          <x-badge :value="2" type="danger">
            <x-button type='danger' plain>danger</x-button>
          </x-badge>
          <x-badge :value="2" type="warning">
            <x-button type='warning' plain>warning</x-button>
          </x-badge>
        </template>
      </textarea>
    </RelaxTag>
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
