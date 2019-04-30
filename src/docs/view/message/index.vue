<template lang="html">
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">message 消息</h4>
        <p class="page-title-decs">来自Relax的消息</p>
      </div>
    </div>
    <div class="components-button-demo">
      <RelaxTag name="普通提示">
        <template slot="temp">
          <Button type='primary' @click="info">显示普通提示</Button>
        </template>
        <template slot="desc">
          最基本的提示，默认在<i>1.5</i>秒后消失。
        </template>
        <textarea slot="code">
          <template>
            <Button type='primary' @click="info">显示普通提示</Button>
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
          <Button @click="success">显示成功提示</Button>
          <Button @click="warning">显示警告提示</Button>
          <Button @click="error">显示错误提示</Button>
        </template>
        <template slot="desc">
          不同的提示状态：成功、警告、错误。
        </template>
        <textarea slot="code">
          <template>
            <Button @click="success">显示成功提示</Button>
            <Button @click="warning">显示警告提示</Button>
            <Button @click="error">显示错误提示</Button>
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
