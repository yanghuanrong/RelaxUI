<script>
export default {
  name: 'Row',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: value => ['start', 'center', 'end', 'space-between', 'space-around'].indexOf(value) !== -1
    },
    align: {
      type: String,
      default: 'top',
      validator: value => ['top', 'center', 'bottom'].indexOf(value) !== -1
    }
  },
  render () {
    const classList = {}
    const style = {}
    if (this.gutter) {
      style.marginLeft = `-${this.gutter / 2}px`
      style.marginRight = style.marginLeft
      classList.style = style
    }
    if (this.type === 'flex') {
      classList.class = [
        're-row-flex',
        this.justify !== 'start' ? `re-row-flex-${this.justify}` : '',
        this.align !== 'top' ? `re-row-flex-${this.align}` : '']
    } else {
      classList.class = ['re-row']
    }
    return <div {...classList}>{this.$slots.default}</div>
  }
}
</script>
