<template>
  <li class='re-submenu' @click.stop='handleClick' :class="{'is-opened': isActive}">
    <div class="re-menu-title">
      <slot name="title"></slot>
    </div>
    <slider-transition>
      <ul class="re-menu" v-show="isActive">
        <slot></slot>
      </ul>
    </slider-transition>
  </li>
</template>

<script>
import Menu from './menu-mixin'
import sliderTransition from '../transition/slider'

export default {
  name: 'ReSubmenu',
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
  components: {
    sliderTransition
  },
  methods: {
    handleClick () {
      this.$emit('click', this)
      this.isActive = !this.isActive
    }
  }
}
</script>
