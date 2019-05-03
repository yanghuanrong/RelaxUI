<template lang="html">
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">x-buttons 按钮</h4>
        <p class="page-title-decs">按钮用于开始一个即时操作</p>
      </div>
    </div>
    <div class="components-demo">
    <RelaxTag name="基础按钮">
      <template slot="temp">
        <x-button>default</x-button>
        <x-button type='primary'>primary</x-button>
        <x-button type='success'>success</x-button>
        <x-button type='info'>info</x-button>
        <x-button type='danger'>danger</x-button>
        <x-button type='warning'>warning</x-button>
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

    <RelaxTag name="镂空按钮">
      <template slot="temp">
          <x-button plain>default</x-button>
          <x-button type='primary' plain>primary</x-button>
          <x-button type='success' plain>success</x-button>
          <x-button type='info' plain>info</x-button>
          <x-button type='danger' plain>danger</x-button>
          <x-button type='warning' plain>warning</x-button>
      </template>
      <template slot="desc">
        设置<i>plain</i>属性可以设置镂空按钮
      </template>
      <textarea slot="code">
        <template>
          <x-button plain>default</x-button>
          <x-button type='primary' plain>primary</x-button>
          <x-button type='success' plain>success</x-button>
          <x-button type='info' plain>info</x-button>
          <x-button type='danger' plain>danger</x-button>
          <x-button type='warning' plain>warning</x-button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="加载中状态">
      <template slot="temp">
          <x-button type='warning' size="sm" round :loading="true">loading</x-button>
          <x-button type='danger' round :loading="true">loading</x-button>
          <x-button type='info' round plain :loading="true">loading</x-button>
          <x-button type='success' plain :loading="true">loading</x-button>
          <x-button type='primary' :loading="loading" @click="enterLoading">Click loading</x-button>
      </template>
      <template slot="desc">
        添加 <i>loading</i> 属性即可让按钮处于加载状态
      </template>
      <textarea slot="code">
        <template>
          <x-button type='warning' size="sm" round :loading="true">loading</x-button>
          <x-button type='danger' round :loading="true">loading</x-button>
          <x-button type='info' round plain :loading="true">loading</x-button>
          <x-button type='success' plain :loading="true">loading</x-button>
          <x-button type='primary' :loading="loading" @click="enterLoading">Click loading</x-button>
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
        
      </textarea>
    </RelaxTag>

    <RelaxTag name="圆角按钮">
      <template slot="temp">
        <x-button round>default</x-button>
        <x-button type='primary' round>primary</x-button>
        <x-button type='success' round>success</x-button>
        <x-button type='info' round>info</x-button>
        <x-button type='danger' round>danger</x-button>
        <x-button type='warning' round>warning</x-button>
      </template>
      <template slot="desc">
        设置<i>round</i>属性可以设置圆角按钮
      </template>
      <textarea slot="code">
        <template>
          <x-button round>default</x-button>
          <x-button type='primary' round>primary</x-button>
          <x-button type='success' round>success</x-button>
          <x-button type='info' round>info</x-button>
          <x-button type='danger' round>danger</x-button>
          <x-button type='warning' round>warning</x-button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="不可点击">
      <template slot="temp">
        <x-button plain round disabled>default</x-button>
        <x-button type='primary' plain round disabled>primary</x-button>
        <x-button type='success' plain round disabled>success</x-button>
        <x-button type='info' plain round disabled>info</x-button>
        <x-button type='danger' plain round disabled>danger</x-button>
        <x-button type='warning' plain round disabled>warning</x-button>
      </template>
      <template slot="desc">
        设置<i>disabled</i>属性达到按钮不可点击状态
      </template>
      <textarea slot="code">
        <template>
          <x-button plain round disabled>default</x-button>
          <x-button type='primary' plain round disabled>primary</x-button>
          <x-button type='success' plain round disabled>success</x-button>
          <x-button type='info' plain round disabled>info</x-button>
          <x-button type='danger' plain round disabled>danger</x-button>
          <x-button type='warning' plain round disabled>warning</x-button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="按钮尺寸">
      <template slot="temp">
        <x-button type='primary' size='sm'>small</x-button>
        <x-button type='warning'>normal</x-button>
        <x-button size='lg'>large</x-button>
      </template>
      <template slot="desc">
        按钮根据<i>size</i>来变换尺寸，提供了<i>sm</i><i>lg</i>和默认的三种
      </template>
      <textarea slot="code">
        <template>
          <x-button type='primary' size='sm'>small</x-button>
          <x-button type='warning'>normal</x-button>
          <x-button size='lg'>large</x-button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="图标按钮">
      <template slot="temp">
        <x-button icon="x-icon-heart-on" circle></x-button>
        <x-button type="primary" icon="x-icon-x" circle></x-button>
        <x-button type="info" icon="x-icon-mic" circle></x-button>
        <x-button type="danger" icon="x-icon-music" circle></x-button>
        <x-button type="warning" icon="x-icon-thumbs-down" circle></x-button>
        <x-button type="success" icon="x-icon-thumbs-up" circle></x-button>
      </template>
      <template slot="desc">
        圆形的图标按钮
      </template>
      <textarea slot="code">
        <template>
          <x-button icon="x-icon-heart-on" circle></x-button>
          <x-button type="primary" icon="x-icon-x" circle></x-button>
          <x-button type="info" icon="x-icon-mic" circle></x-button>
          <x-button type="danger" icon="x-icon-music" circle></x-button>
          <x-button type="warning" icon="x-icon-thumbs-down" circle></x-button>
          <x-button type="success" icon="x-icon-thumbs-up" circle></x-button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="图标按钮">
      <template slot="temp">
        <x-button icon="x-icon-home">default</x-button>
        <x-button type="primary" icon='x-icon-star-on'>primary</x-button>
        <x-button type='success' icon='x-icon-search'>success</x-button>
        <x-button type='info' icon="x-icon-user">info</x-button>
        <x-button type='danger' icon="x-icon-zap">danger</x-button>
        <x-button type='warning' icon="x-icon-triangle">warning</x-button>
      </template>
      <template slot="desc">
        有文字信息的图标按钮
      </template>
      <textarea slot="code">
        <template>
          <x-button icon="x-icon-home">default</x-button>
          <x-button type="primary" icon='x-icon-star-on'>primary</x-button>
          <x-button type='success' icon='x-icon-search'>success</x-button>
          <x-button type='info' icon="x-icon-user">info</x-button>
          <x-button type='danger' icon="x-icon-zap">danger</x-button>
          <x-button type='warning' icon="x-icon-triangle">warning</x-button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="块级按钮">
      <template slot="temp">
        <x-button block>default</x-button>
        <x-button type='primary' block>primary</x-button>
        <x-button type='success' block>success</x-button>
        <x-button type='info' block>info</x-button>
        <x-button type='danger' block>danger</x-button>
        <x-button type='warning' block>warning</x-button>
      </template>
      <template slot="desc">
        设置<i>block</i>属性变成块级按钮
      </template>
      <textarea slot="code">
        <template>
          <x-button block>default</x-button>
          <x-button type='primary' block>primary</x-button>
          <x-button type='success' block>success</x-button>
          <x-button type='info' block>info</x-button>
          <x-button type='danger' block>danger</x-button>
          <x-button type='warning' block>warning</x-button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="按钮组">
      <template slot="temp">
        <x-buttonGroup>
          <x-button>primary</x-button>
          <x-button>success</x-button>
          <x-button>info</x-button>
        </x-buttonGroup>
      </template>
      <template slot="desc">
        包裹<i>x-buttonGroup</i>标签变成按钮组
      </template>
      <textarea slot="code">
        <template>
          <x-buttonGroup>
            <x-button>primary</x-button>
            <x-button>success</x-button>
            <x-button>info</x-button>
          </x-buttonGroup>
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
