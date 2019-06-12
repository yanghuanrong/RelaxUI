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
        定义value属性，它接受Number或者String <br/>
        标记可以根据<i>type</i>来设置不同的颜色，提供了5种类型的标记<i>primary</i><i>success</i><i>info</i><i>danger</i><i>warning</i>
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

    <RelaxTag name="最大值">
      <template slot="temp">
        <x-badge :value="120" :max="99">
          <x-button type='primary' plain>primary</x-button>
        </x-badge>
        <x-badge :value="21" :max="10">
          <x-button type='warning' plain>warning</x-button>
        </x-badge>
      </template>
      <template slot="desc">
        可自定义最大值
      </template>
      <textarea slot="code">
        <template>
          <x-badge :value="120" :max="99">
            <x-button type='primary' plain>primary</x-button>
          </x-badge>
          <x-badge :value="21" :max="10">
            <x-button type='warning' plain>warning</x-button>
          </x-badge>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="自定义内容">
      <template slot="temp">
        <x-badge value="New">
          <x-button type='primary' plain>primary</x-button>
        </x-badge>
        <x-badge value="Hot">
          <x-button type='warning' plain>warning</x-button>
        </x-badge>
      </template>
      <template slot="desc">
        可以显示数字以外的文本内容。
      </template>
      <textarea slot="code">
        <template>
          <x-badge value="New">
            <x-button type='primary' plain>primary</x-button>
          </x-badge>
          <x-badge value="Hot">
            <x-button type='warning' plain>warning</x-button>
          </x-badge>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="小红点">
      <template slot="temp">
        <x-badge dot>评论</x-badge>
        <x-badge dot>
          <x-button type='warning' plain>消息</x-button>
        </x-badge>
      </template>
      <template slot="desc">
        以红点的形式标注需要关注的内容
      </template>
      <textarea slot="code">
        <template>
          <x-badge dot>评论</x-badge>
          <x-badge dot>
            <x-button type='warning' plain>消息</x-button>
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
