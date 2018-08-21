<template>
  <li @click='select' class="re-option" :class="className">
    <div class="re-option-row">
      <div class="re-option-text">{{value}}</div>
    </div>
  </li>
</template>

<script>
import emit from '../utils/emit'
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
      isActive: false
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
        this.dispatch('Select', 'select', {label: this.value, check: this.isActive})
      }
    }
  }
}
</script>
