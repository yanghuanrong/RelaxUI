<template>
  <li class='yi-menu-item' @click.stop='handleClick' :class="{'active': isActive}">
    <slot></slot>
  </li>
</template>

<script>
import Menu from './menu-mixin'

export default {
  name: 'YiMenuItem',
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
        this.dispatch('YiSubmenu', 'item-click', this)
      } else {
        this.isActive = false
      }
    })
  },
  methods: {
    handleClick (e) {
      this.dispatch('YiMenu', 'item-click', this)
      this.$emit('click', this)
    }
  }
  // render () {
  //   const className = ['yi-menu-item', {'active': this.isActive}]
  //   return <li class={className} onClick={this.handleClick}>
  //     {this.$slots.default}
  //   </li>
  // }
}
</script>
