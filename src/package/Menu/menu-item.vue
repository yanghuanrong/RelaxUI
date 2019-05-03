<template>
  <li class='x-menu-item' @click.stop='handleClick' :class="{'active': isActive}">
    <slot></slot>
  </li>
</template>

<script>
import emit from '../utils/emit'

export default {
  name: 'xMenuItem',
  mixins: [emit],
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
        this.dispatch('xSubmenu', 'item-click', this)
        this.isRoute()
      } else {
        this.isActive = false
      }
    })
  },
  methods: {
    handleClick (e) {
      this.dispatch('xMenu', 'item-click', this)
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
