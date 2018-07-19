import {addClass} from '../utils/dom'

export default {
  name: 'sliderTransition',
  methods: {
    beforeEnter (el) {
      addClass(el, 'transition')
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
  },
  render () {
    const listeners = {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        beforeLeave: this.beforeLeave
      }
    }
    return <transition {...listeners}>
      {this.$slots.default}
    </transition>
  }
}
