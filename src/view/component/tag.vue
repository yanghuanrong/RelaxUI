<template>
  <div class="tag-box">
    <div class="tag-left">
      <div class="tag-temp">
        <slot name="temp"></slot>
      </div>
      <div class="tag-detail">
        <div class="tag-title"><span>{{name}}</span></div>
        <div class="tag-desc">
          <slot name="desc"></slot>
        </div>
      </div>
    </div>
    <div class="tag-right">
      <div class="tag-handle">
        <i class="re-icon-copy" @click="copy" v-if="!isCopy"></i>
        <i class="re-icon-check" v-if="isCopy"></i>
      </div>
      <div style="overflow:hidden">
      <div ref='textarea' class="textarea"><slot name='code'></slot></div>
      <highlight-code lang="html">
        {{code}}
      </highlight-code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RelaxTag',
  props: {
    name: String
  },
  data () {
    return {
      isShow: true,
      code: '',
      isCopy: false
    }
  },
  mounted () {
    this.code = this.$refs.textarea.children[0].value
    this.isShow = false
  },
  methods: {
    copy () {
      let element = this.$refs.textarea.children[0]
      element.select()
      element.setSelectionRange(0, element.value.length)
      document.execCommand('Copy')
      this.isCopy = true
      setTimeout(() => {
        this.isCopy = false
      }, 2000)
    }
  }
}
</script>
