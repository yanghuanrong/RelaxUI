<template>
  <li class="re-option re-option-group" v-show="isShow">
    <div class="re-option-title">
      <div class="re-option-row" :class="className" @click='select'>
        <div class="re-option-text">{{label}}</div>
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
  name: 'OptionGroup',
  mixins: [emit],
  props: {
    label: String
  },
  data () {
    return {
      isCheck: 0,
      isShow: true
    }
  },
  computed: {
    className () {
      return {
        'is-check': this.isCheck === 1,
        'select': this.isCheck === 2
      }
    }
  },
  mounted () {
    this.$on('select', ({label, check}) => {
      let checkLen = this.$children.filter((item) => item.isActive)
      if (this.$children.length === checkLen.length) {
        this.isCheck = 2
      } else if (checkLen.length) {
        this.isCheck = 1
      } else {
        this.isCheck = 0
      }
    })
    this.$on('groupshow', () => {
      this.isShow = this.$children.some(item => item.isShow)
    })
    this.$on('matched', (param) => {
      if (this.label.indexOf(param) === -1) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    })
  },
  methods: {
    select () {
      this.broadcast('Option', 'groupValue', this.isCheck)
    }
  }
}
</script>
