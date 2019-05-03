<template lang="html">
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Message 消息</h4>
        <p class="page-title-decs">消息通知</p>
      </div>
    </div>
    <div class="components-demo">
      <RelaxTag name="普通提示">
        <template slot="temp">
          <x-button type='primary' @click="info">显示普通提示</x-button>
        </template>
        <template slot="desc">
          最基本的提示，默认在<i>1.5</i>秒后消失。
        </template>
        <textarea slot="code">
          <template>
            <x-button type='primary' @click="info">显示普通提示</x-button>
          </template>
          <script>
          export default {
            methods: {
              info(){
                this.$message.info('message 消息')
              }
            }
          }
          </script>
        </textarea>
      </RelaxTag>

      <RelaxTag name="提示类型">
        <template slot="temp">
          <x-button @click="success">显示成功提示</x-button>
          <x-button @click="warning">显示警告提示</x-button>
          <x-button @click="error">显示错误提示</x-button>
        </template>
        <template slot="desc">
          不同的提示状态：成功、警告、错误。
        </template>
        <textarea slot="code">
          <template>
            <x-button @click="success">显示成功提示</x-button>
            <x-button @click="warning">显示警告提示</x-button>
            <x-button @click="error">显示错误提示</x-button>
          </template>
          <script>
          export default {
            methods: {
              success(){
                this.$message.success('message 消息')
              },
              warning(){
                this.$message.warning('message 消息')
              },
              error(){
                this.$message.error('message 消息')
              }
            }
          }
          </script>
        </textarea>
      </RelaxTag>

      <RelaxTag name="加载中">
        <template slot="temp">
          <x-button @click="loading">显示加载中</x-button>
        </template>
        <template slot="desc">
          Loading 的状态，并异步在某个时机移除。
        </template>
        <textarea slot="code">
          <template>
            <x-button @click="loading">显示加载中</x-button>
          </template>
          <script>
          export default {
            methods: {
              loading(){
                const loading = this.$message.loading('message 消息', 0)
                setTimeout(loading, 3000)
              }
            }
          }
          </script>
        </textarea>
      </RelaxTag>

  </div>
  </div>
</template>

<script>
export default {
  methods: {
    info(){
      this.$message.info('message 消息')
    },
    success(){
      this.$message.success('message 消息')
    },
    warning(){
      this.$message.warning('message 消息')
    },
    error(){
      this.$message.error('message 消息')
    },
    loading(){
      const loading = this.$message.loading('message 消息', 0)
      setTimeout(loading, 3000)
    }
  }
}
</script>

