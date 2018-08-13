<script>
export default {
  name: 'ReRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  methods: {
    classNames () {
      const classList = {}
      classList.style = { marginLeft: `-${this.gutter / 2}px`, marginRight: `-${this.gutter / 2}px` }
      if (this.type === 'flex') {
        classList.class = [
          're-row-flex',
          this.justify !== 'start' ? `is-justify-${this.justify}` : '',
          this.align !== 'top' ? `is-align-${this.align}` : '']
      }
      return classList
    }
  },
  render () {
    return <div class="re-row" {...this.classNames()}>{this.$slots.default}</div>
  }
}
</script>
