<template lang="html">
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Buttons 按钮</h4>
        <p class="page-title-decs">按钮用于开始一个即时操作</p>
      </div>
    </div>
    <div  class="components-button-demo">
    <RelaxTag name="基础按钮">
      <template slot="temp">
        <Button>default</Button>
        <Button type='primary'>primary</Button>
        <Button type='success'>success</Button>
        <Button type='info'>info</Button>
        <Button type='danger'>danger</Button>
        <Button type='warning'>warning</Button>
      </template>
      <template slot="desc">
        按钮可以根据<i>type</i>来设置不同的颜色，提供了6种类型的按钮<i>primary</i><i>success</i><i>info</i><i>danger</i><i>warning</i>
      </template>
      <textarea slot="code">
        <template>
          <Button>default</Button>
          <Button type='primary'>primary</Button>
          <Button type='success'>success</Button>
          <Button type='info'>info</Button>
          <Button type='danger'>danger</Button>
          <Button type='danger'>danger</Button>
          <Button type='warning'>warning</Button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="镂空按钮">
      <template slot="temp">
          <Button plain>default</Button>
          <Button type='primary' plain>primary</Button>
          <Button type='success' plain>success</Button>
          <Button type='info' plain>info</Button>
          <Button type='danger' plain>danger</Button>
          <Button type='warning' plain>warning</Button>
      </template>
      <template slot="desc">
        设置<i>plain</i>属性可以设置镂空按钮
      </template>
      <textarea slot="code">
        <template>
          <Button plain>default</Button>
          <Button type='primary' plain>primary</Button>
          <Button type='success' plain>success</Button>
          <Button type='info' plain>info</Button>
          <Button type='danger' plain>danger</Button>
          <Button type='warning' plain>warning</Button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="加载中状态">
      <template slot="temp">
          <Button type='warning' size="sm" round :loading="true">loading</Button>
          <Button type='danger' round :loading="true">loading</Button>
          <Button type='info' round plain :loading="true">loading</Button>
          <Button type='success' plain :loading="true">loading</Button>
          <Button type='primary' :loading="loading" @click="enterLoading">Click loading</Button>
      </template>
      <template slot="desc">
        添加 <i>loading</i> 属性即可让按钮处于加载状态
      </template>
      <textarea slot="code">
        <template>
          <Button type='warning' size="sm" round :loading="true">loading</Button>
          <Button type='danger' round :loading="true">loading</Button>
          <Button type='info' round plain :loading="true">loading</Button>
          <Button type='success' plain :loading="true">loading</Button>
          <Button type='primary' :loading="loading" @click="enterLoading">Click loading</Button>
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
        <Button round>default</Button>
        <Button type='primary' round>primary</Button>
        <Button type='success' round>success</Button>
        <Button type='info' round>info</Button>
        <Button type='danger' round>danger</Button>
        <Button type='warning' round>warning</Button>
      </template>
      <template slot="desc">
        设置<i>round</i>属性可以设置圆角按钮
      </template>
      <textarea slot="code">
        <template>
          <Button round>default</Button>
          <Button type='primary' round>primary</Button>
          <Button type='success' round>success</Button>
          <Button type='info' round>info</Button>
          <Button type='danger' round>danger</Button>
          <Button type='warning' round>warning</Button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="不可点击">
      <template slot="temp">
        <Button plain round disabled>default</Button>
        <Button type='primary' plain round disabled>primary</Button>
        <Button type='success' plain round disabled>success</Button>
        <Button type='info' plain round disabled>info</Button>
        <Button type='danger' plain round disabled>danger</Button>
        <Button type='warning' plain round disabled>warning</Button>
      </template>
      <template slot="desc">
        设置<i>disabled</i>属性达到按钮不可点击状态
      </template>
      <textarea slot="code">
        <template>
          <Button plain round disabled>default</Button>
          <Button type='primary' plain round disabled>primary</Button>
          <Button type='success' plain round disabled>success</Button>
          <Button type='info' plain round disabled>info</Button>
          <Button type='danger' plain round disabled>danger</Button>
          <Button type='warning' plain round disabled>warning</Button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="按钮尺寸">
      <template slot="temp">
        <Button type='primary' size='sm'>small</Button>
        <Button type='warning'>normal</Button>
        <Button size='lg'>large</Button>
      </template>
      <template slot="desc">
        按钮根据<i>size</i>来变换尺寸，提供了<i>sm</i><i>lg</i>和默认的三种
      </template>
      <textarea slot="code">
        <template>
          <Button type='primary' size='sm'>small</Button>
          <Button type='warning'>normal</Button>
          <Button size='lg'>large</Button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="图标按钮">
      <template slot="temp">
        <Button icon="re-icon-heart-on" circle></Button>
        <Button type="primary" icon="re-icon-x" circle></Button>
        <Button type="info" icon="re-icon-mic" circle></Button>
        <Button type="danger" icon="re-icon-music" circle></Button>
        <Button type="warning" icon="re-icon-thumbs-down" circle></Button>
        <Button type="success" icon="re-icon-thumbs-up" circle></Button>
      </template>
      <template slot="desc">
        圆形的图标按钮
      </template>
      <textarea slot="code">
        <template>
          <Button icon="re-icon-heart-on" circle></Button>
          <Button type="primary" icon="re-icon-x" circle></Button>
          <Button type="info" icon="re-icon-mic" circle></Button>
          <Button type="danger" icon="re-icon-music" circle></Button>
          <Button type="warning" icon="re-icon-thumbs-down" circle></Button>
          <Button type="success" icon="re-icon-thumbs-up" circle></Button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="图标按钮">
      <template slot="temp">
        <Button icon="re-icon-home">default</Button>
        <Button type="primary" icon='re-icon-star-on'>primary</Button>
        <Button type='success' icon='re-icon-search'>success</Button>
        <Button type='info' icon="re-icon-user">info</Button>
        <Button type='danger' icon="re-icon-zap">danger</Button>
        <Button type='warning' icon="re-icon-triangle">warning</Button>
      </template>
      <template slot="desc">
        有文字信息的图标按钮
      </template>
      <textarea slot="code">
        <template>
          <Button icon="re-icon-home">default</Button>
          <Button type="primary" icon='re-icon-star-on'>primary</Button>
          <Button type='success' icon='re-icon-search'>success</Button>
          <Button type='info' icon="re-icon-user">info</Button>
          <Button type='danger' icon="re-icon-zap">danger</Button>
          <Button type='warning' icon="re-icon-triangle">warning</Button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="块级按钮">
      <template slot="temp">
        <Button block>default</Button>
        <Button type='primary' block>primary</Button>
        <Button type='success' block>success</Button>
        <Button type='info' block>info</Button>
        <Button type='danger' block>danger</Button>
        <Button type='warning' block>warning</Button>
      </template>
      <template slot="desc">
        设置<i>block</i>属性变成块级按钮
      </template>
      <textarea slot="code">
        <template>
          <Button block>default</Button>
          <Button type='primary' block>primary</Button>
          <Button type='success' block>success</Button>
          <Button type='info' block>info</Button>
          <Button type='danger' block>danger</Button>
          <Button type='warning' block>warning</Button>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="按钮组">
      <template slot="temp">
        <ButtonGroup>
          <Button>primary</Button>
          <Button>success</Button>
          <Button>info</Button>
        </ButtonGroup>
      </template>
      <template slot="desc">
        包裹<i>ButtonGroup</i>标签变成按钮组
      </template>
      <textarea slot="code">
        <template>
          <ButtonGroup>
            <Button>primary</Button>
            <Button>success</Button>
            <Button>info</Button>
          </ButtonGroup>
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
