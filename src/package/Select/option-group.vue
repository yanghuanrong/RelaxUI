<template>
  <li class="x-option x-option-group" v-show="isShow">
    <div class="x-option-title">
      <div class="x-option-row" :class="className" @click='select'>
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
import { clearTimeout, setTimeout } from 'timers';

const ALL = 2
const HALF = 1
const NONE = 0

export default {
  name: 'xOptionGroup',
  mixins: [emit],
  props: {
    label: String
  },
  data () {
    return {
      isCheck: NONE,
      isShow: true
    }
  },
  computed: {
    className () {
      return {
        'is-check': this.isCheck === HALF,
        'select': this.isCheck === 2
      }
    }
  },
  mounted () {
    this.$on('select', ({label, check}) => {
      let checkLen = this.$children.filter((item) => item.isActive)

      if (this.$children.length === checkLen.length) {
        this.isCheck = ALL
      } else if (checkLen.length) {
        this.isCheck = HALF
      } else {
        this.isCheck = NONE
      }
    })
    this.$on('groupshow', () => {
      this.isShow = this.$children.some(item => item.isShow)
    })

    let matchedTid = null
    this.$on('matched', (param) => {
      clearTimeout(matchedTid)
      setTimeout(() => {
        this.isShow = !(this.label.indexOf(param) === -1)
      }, 100)
    })
  },
  methods: {
    select () {
      this.broadcast('xOption', 'groupValue', this.isCheck)
    }
  }
}
</script>
