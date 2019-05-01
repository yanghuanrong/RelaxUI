<template>
  <li @click='select' class="re-option" v-show="isShow">
    <div class="re-option-row" :class="className">
      <div class="re-option-text">{{value}}</div>
    </div>
  </li>
</template>

<script>
import emit from '../utils/emit'
import { setTimeout, clearTimeout } from 'timers';
export default {
  name: 'Option',
  inject: ['rootSelect'],
  mixins: [emit],
  props: {
    value: String,
    disabled: Boolean
  },
  data () {
    return {
      isActive: false,
      isShow: true
    }
  },
  computed: {
    className () {
      return {
        'select': this.isActive,
        'is-disabled': this.disabled
      }
    }
  },
  mounted () {
    this.$on('clearValue', (value) => {
      if (this.value === value) {
        this.isActive = false
      }
      this.dispatch('OptionGroup', 'select', {label: this.value, check: this.isActive})
    })
    this.$on('groupValue', (status) => {
      if (this.disabled) {
        return
      }
      switch (status) {
        case 0:
          this.isActive = true
          this.emitParent()
          break
        case 1:
          if (!this.isActive) {
            this.isActive = status !== 2
            this.emitParent()
          }
          break
        case 2:
          this.isActive = false
          this.emitParent()
          break
        default:
      }
      
    })
    let matchedTid = null
    this.$on('matched', (param) => {
      clearTimeout(matchedTid)
      matchedTid = setTimeout(() => {
        this.isShow = !(this.value.indexOf(param) === -1)
        this.dispatch('OptionGroup', 'groupshow', true)
      }, 100)
      
    })
  },
  methods: {
    select () {
      if (!this.disabled) {
        if (this.rootSelect.multiple) {
          this.isActive = !this.isActive
        } else {
          this.rootSelect.$children.map(item => { item.isActive = false })
          this.isActive = true
        }
        this.emitParent()
      }
    },
    emitParent () {
      this.dispatch('Select', 'select', {label: this.value, check: this.isActive})
      this.dispatch('OptionGroup', 'select', {label: this.value, check: this.isActive})
    }
  }
}
</script>
