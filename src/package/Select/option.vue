<template>
  <li @click='select' class="re-option" :class="className">{{value}}</li>
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
        select: this.isActive,
        'is-disabled': this.disabled
      }
    }
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
