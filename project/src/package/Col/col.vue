<script>
export default {
  name: 'ReCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number
  },
  methods: {
    classNames () {
      const classList = []
      let isSpan = true
      const type = ['sm', 'md', 'lg', 'xl']
      type.map(item => {
        if (!isNaN(this[item])) {
          isSpan = false
          classList.push(`re-col-${item}-${this[item]}`)
        }
      })
      if (isSpan) {
        return {
          class: [`re-col-sm-${this.span}`]
        }
      } else {
        return {
          class: classList
        }
      }
    }
  },
  render () {
    let style = { paddingLeft: `${this.$parent.gutter}px`, paddingRight: `${this.$parent.gutter}px` }
    return <div {...this.classNames()} style={style}>{this.$slots.default}</div>
  }
}
</script>
