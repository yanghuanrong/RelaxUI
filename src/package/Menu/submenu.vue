<template>
  <li class='yi-submenu' @click.stop='handleClick' :class="{'is-opened': isActive}">
    <div class="yi-menu-title">
      <slot name="title"></slot>
    </div>
    <slider-transition>
      <ul class="yi-menu" v-show="isActive">
        <slot></slot>
      </ul>
    </slider-transition>
  </li>
</template>

<script>
import Menu from './menu-mixin'
import sliderTransition from '../transition/slider'

export default {
  name: 'Submenu',
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
