<template>
  <li class='yi-submenu' @click.stop='handleClick' :class="{'is-opened': isActive}">
    <div class="yi-menu-title">
      <slot name="title"></slot>
    </div>
    <transition
      v-on:before-enter='beforeEnter'
      v-on:enter='enter'
      v-on:beforeLeave = 'beforeLeave'
      >
      <ul class="yi-menu" v-show="isActive">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
import Menu from './menu-mixin'

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
  methods: {
    handleClick () {
      this.$emit('click', this)
      this.isActive = !this.isActive
    },
    hasClass(el, style) {
	    return new RegExp('\\b'+style+'\\b').test(el.className);
	  },
    addClass (el, style) {
      if(!this.hasClass(el, style)) {
        el.className+=' '+style;
      }
    },
    delClass (el,style) {
      if(this.hasClass(el, style)) {
        el.className = el.className.replace(new RegExp('(?:^|\\s)'+style+'(?=\\s|$)'), '').replace(/^\s*|\s*$/g, '');
      }
    },
    beforeEnter (el) {
      this.addClass(el, 'transition')
      el.style.height = '0'
      el.style.overflow = 'hidden'
    },
    enter (el) {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      } else {
        el.style.height = ''
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      }

      el.style.overflow = 'hidden'
    },
    beforeLeave (el) {
      el.style.height = '0'
    }
  }
}
</script>
