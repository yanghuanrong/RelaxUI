import {addClass, delClass} from '../utils/dom'

export default {
  name: 'sliderTransition',
  methods: {
    beforeEnter (el) {
      addClass(el, 'transition')
      if (!el.dataset) {
        el.dataset = {}
      }
      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom

      el.style.height = '0'
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    },
    enter (el) {
      el.dataset.oldOverflow = el.style.overflow
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
    afterEnter (el) {
      delClass(el, 'transition')
      el.style.height = ''
      el.style.overflow = el.dataset.oldOverflow
    },
    beforeLeave (el) {
      if (!el.dataset) {
        el.dataset = {}
      }
      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom
      el.dataset.oldOverflow = el.style.overflow

      el.style.height = el.scrollHeight + 'px'
      el.style.overflow = 'hidden'
    },
    leave (el) {
      if (el.scrollHeight !== 0) {
        addClass(el, 'transition')
        el.style.height = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      }
    },
    afterLeave (el) {
      delClass(el, 'transition')
      el.style.height = ''
      el.style.overflow = el.dataset.oldOverflow
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }
  },
  render () {
    const listeners = {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        afterEnter: this.afterEnter,
        beforeLeave: this.beforeLeave,
        leave: this.leave,
        afterLeave: this.afterLeave
      }
    }
    return <transition {...listeners}>
      {this.$slots.default}
    </transition>
  }
}
