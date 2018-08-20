<template>
  <li class='re-menu-item' @click.stop='handleClick' :class="{'active': isActive}">
    <slot></slot>
  </li>
</template>

<script>
import {dispatch} from '../utils/emit'

export default {
  name: 'MenuItem',
  props: {
    name: String,
    to: String
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
        this.dispatch('Submenu', 'item-click', this)
        this.isRoute()
      } else {
        this.isActive = false
      }
    })
  },
  methods: {
    dispatch (componentName, eventName, params) {
      dispatch.call(this, componentName, eventName, params)
    },
    handleClick (e) {
      this.dispatch('Menu', 'item-click', this)
      this.$emit('click', this)
      this.isRoute()
    },
    isRoute () {
      if (this.to) {
        this.$router.push(this.to)
      }
    }
  }
}
</script>
