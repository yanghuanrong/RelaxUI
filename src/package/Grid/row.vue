<script>
export default {
  name: 'xRow',
  provide(){
    return {
      rootRow: this
    }
  },
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: '',
      validator: value => ['', 'flex'].some(item => item === value)
    },
    justify: {
      type: String,
      default: 'start',
      validator: value => ['start', 'center', 'end', 'space-between', 'space-around'].some(item => item === value)
    },
    align: {
      type: String,
      default: 'top',
      validator: value => ['top', 'center', 'bottom'].some(item => item === value)
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

    let className = ['x-row']
    if (this.type === 'flex') {
      className = className.concat([
        'x-row-flex',
        this.justify !== 'start' ? `x-row-flex-${this.justify}` : '',
        this.align !== 'top' ? `x-row-flex-${this.align}` : ''])
    }
    classList.class = className

    return <div {...classList}>{this.$slots.default}</div>
  }
}
</script>
