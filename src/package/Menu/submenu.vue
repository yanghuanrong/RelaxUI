<template>
  <li class='yi-menu-group' @click.stop='handleClick' :class="{'is-opened': this.isActive}">
    <div class="yi-menu-title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </li>
</template>

<script>
import Menu from './menu-mixin'

export default {
  name: 'YiSubmenu',
  mixins: [Menu],
  data () {
    return {
      isActive: false
    }
  },
  mounted () {
    this.$on('item-click', (name) => {
      this.isActive = true
    })
  },
  methods: {
    handleClick () {
      this.$emit('click', this)
      this.isActive = !this.isActive
    }
  }
}
</script>
