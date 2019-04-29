<template>
  <div class="tag-box">
    <div class="tag-left" ref='left'>
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
    <div class="tag-right" ref='right' :style="style">
      <div class="tag-display" @click='codeEv' v-if='R - 20 > L'>
        <i class="re-icon-chevron-down" v-if='isShow'></i>
        <i class="re-icon-chevron-up" v-if='!isShow'></i>
      </div>
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
      isCopy: false,
      L: 0,
      R: 0,
      style: 0
    }
  },

  mounted () {
    this.code = this.$refs.textarea.children[0].value

    this.$nextTick(() => {
      this.L = this.$refs.left.children[0].offsetHeight + this.$refs.left.children[1].offsetHeight
      this.R = this.$refs.right.offsetHeight
      if (this.R > this.L) {
        this.style = {height: this.L + 'px'}
      }
    })
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
    },
    codeEv () {
      if (this.isShow) {
        this.style = {height: this.R + 'px'}
      } else {
        this.style = {height: this.L + 'px'}
      }
      this.isShow = !this.isShow
    }
  }
}
</script>
