<template>
  <li class='re-menu-item' @click.stop='handleClick' :class="{'active': isActive}">
    <slot></slot>
  </li>
</template>

<script>
import Menu from './menu-mixin'

export default {
  name: 'ReMenuItem',
  mixins: [Menu],
  props: {
    name: String,
    default: ''
  },
  data () {
    return {
      isActive: false
    }
  },
  mounted () {
    this.$on('on-update-active-name', (name) => {
      if (name === this.name) {
        this.isActive = true
        this.dispatch('ReSubmenu', 'item-click', this)
      } else {
        this.isActive = false
      }
    })
  },
  methods: {
    handleClick (e) {
      this.dispatch('ReMenu', 'item-click', this)
      this.$emit('click', this)
    }
  }
}
</script>
