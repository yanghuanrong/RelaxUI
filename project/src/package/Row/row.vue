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
      classList.style = { marginLeft: `-${this.gutter}px`, marginRight: `-${this.gutter}px` }
      if (this.type === 'flex') {
        return classList.class = ['re-row-flex',
          this.justify !== 'start' ? `is-justify-${this.justify}` : '',
          this.align !== 'top' ? `is-align-${this.align}` : '']
      } else {
        return classList
      }
    }
  },
  render () {
    return <div class="re-row" {...this.classNames()}>{this.$slots.default}</div>
  }
}
</script>
