<script>
import {
  isNumber,
  isObject
} from '../utils/data-type'

export default {
  name: 'xCol',
  inject: ['rootRow'],
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    order: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },
  render () {
    const Row = this.rootRow

    const classList = {}
    const style = {}
    const className = []
    const type = ['sm', 'md', 'lg', 'xs']
    let isSpan = true

    if (Row.gutter) {
      style.paddingLeft = `${this.$parent.gutter / 2}px`
      style.paddingRight = style.paddingLeft
    }

    type.forEach(item => {
      if (isNumber(this[item])) {
        isSpan = false
        className.push(`x-col-${item}-${this[item]}`)
      } else if (isObject(this[item])) {
        isSpan = false
        this[item].span && className.push(`x-col-${item}-${this[item].span}`)
        this[item].offset && className.push(`x-col-offset-${item}-${this[item].span}`)
      }
    })

    if (isSpan) {
      classList.class = [`x-col-sp-${this.span}`]
      this.offset && classList.class.push(`x-col-offset-sp-${this.offset}`)
    } else {
      classList.class = className
    }

    if(Row.type === 'flex') {
      this.order && classList.class.push(`x-col-order-${this.order}`)
    }
    
    return <div {...classList} style={style}>{this.$slots.default}</div>
  }
}
</script>
