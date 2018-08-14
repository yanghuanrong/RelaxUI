<script>
export default {
  name: 'ReCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    order: Number,
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  render () {
    const classList = {}
    const style = {}
    const classArr = []
    let isSpan = true
    const type = ['sm', 'md', 'lg', 'xl']

    if (this.$parent.gutter) {
      style.paddingLeft = `${this.$parent.gutter / 2}px`
      style.paddingRight = style.paddingLeft
    }

    type.map(item => {
      if (typeof this[item] === 'number') {
        isSpan = false
        classArr.push(`re-col-${item}-${this[item]}`)
      } else if (typeof this[item] === 'object') {
        isSpan = false
        classArr.push(this[item].span ? `re-col-${item}-${this[item].span}` : '', this[item].offset ? `re-col-offset-${item}-${this[item].span}` : '')
      }
    })
    if (isSpan) {
      classList.class = [
        `re-col-sp-${this.span}`,
        this.offset ? `re-col-offset-sp-${this.offset}` : ''
      ]
    } else {
      classList.class = classArr
    }
    return <div {...classList} style={style}>{this.$slots.default}</div>
  }
}
</script>
