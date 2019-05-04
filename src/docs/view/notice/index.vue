<template lang="html">
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Notice 通知</h4>
        <p class="page-title-decs">全局展示通知提醒信息。</p>
      </div>
    </div>
    <div class="components-button-demo">
      <RelaxTag name="普通通知">
        <template slot="temp">
          <x-button type="primary" @click="open">打开普通提醒</x-button>
        </template>
        <template slot="desc">
          最简单的用法，4.5 秒后自动关闭。
        </template>
        <textarea slot="code">
          <template>
            <x-button type="primary" @click="open">打开普通提醒</x-button>
          </template>
          <script>
          export default {
            methods: {
              open(){
                this.$notice.open({
                  title: 'message 消息',
                  desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
                })
              }
            }
          }
          </script>
        </textarea>
      </RelaxTag>

      <RelaxTag name="通知类型">
        <template slot="temp">
          <x-button @click="info">打开通知提醒</x-button>
          <x-button @click="success">打开成功提醒</x-button>
          <x-button @click="warning">打开警告提醒</x-button>
          <x-button @click="error">打开错误提醒</x-button>
        </template>
        <template slot="desc">
          不同的提示状态：信息、成功、警告、错误。
        </template>
        <textarea slot="code">
          <template>
            <x-button @click="info">打开通知提醒</x-button>
            <x-button @click="success">打开成功提醒</x-button>
            <x-button @click="warning">打开警告提醒</x-button>
            <x-button @click="error">打开错误提醒</x-button>
          </template>
          <script>
          export default {
            methods: {
              info(){
                this.$notice.info({
                  title: 'Notice 通知提醒',
                  desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
                })
              },
              success(){
                this.$notice.success({
                  title: 'Notice 通知提醒',
                  desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
                })
              },
              warning(){
                this.$notice.warning({
                  title: 'Notice 通知提醒',
                  desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
                })
              },
              error(){
                this.$notice.error({
                  title: 'Notice 通知提醒',
                  desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
                })
              },
            }
          }
          </script>
        </textarea>
      </RelaxTag>

      <RelaxTag name="自定义时长">
        <template slot="temp">
          <x-button @click="time">打开普通提醒</x-button>
        </template>
        <template slot="desc">
          自定义时长，为 0 则不自动关闭
        </template>
        <textarea slot="code">
          <template>
            <x-button @click="open">打开普通提醒</x-button>
          </template>
          <script>
          export default {
            methods: {
              open(){
                this.$notice.success({
                  title: 'Notice 通知提醒',
                  desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述',
                  duration: 0
                })
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
    open(){
      this.$notice.open({
        title: 'Notice 通知提醒',
        desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
      })
    },
    info(){
      this.$notice.info({
        title: 'Notice 通知提醒',
        desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
      })
    },
    success(){
      this.$notice.success({
        title: 'Notice 通知提醒',
        desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
      })
    },
    warning(){
      this.$notice.warning({
        title: 'Notice 通知提醒',
        desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
      })
    },
    error(){
      this.$notice.error({
        title: 'Notice 通知提醒',
        desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
      })
    },
    time(){
      this.$notice.success({
        title: 'Notice 通知提醒',
        desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述',
        duration: 0
      })
    }
  }
}
</script>

