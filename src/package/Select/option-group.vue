<template>
  <li class="x-option x-option-group" v-show="isShow">
    <div class="x-option-title">
      <div class="x-option-row">
        <div class="x-option-text">{{label}}</div>
      </div>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import emit from '../utils/emit'

export default {
  name: 'xOptionGroup',
  mixins: [emit],
  props: {
    label: String
  },
  data () {
    return {
      isShow: true
    }
  },
  mounted () {
    this.$on('groupshow', () => {
      this.isShow = this.$children.some(item => item.isShow)
    })

    this.$on('matched', (param) => {
      this.isShow = !(this.label.indexOf(param) === -1)
    })
  }
}
</script>
