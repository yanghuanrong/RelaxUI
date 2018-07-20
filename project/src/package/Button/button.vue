<script>
export default {
  name: 'ReButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value => ['success', 'primary', 'warning', 'info', 'danger', 'default', 'text'].indexOf(value) !== -1
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '',
      validator: value => ['lg', 'sm', 'xs', ''].indexOf(value) !== -1
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    block: Boolean,
    disable: Boolean
  },
  methods: {
    className () {
      return {
        class: [
          this.type ? 're-btn-' + this.type : '',
          this.size !== '' || this.size ? 're-btn-' + this.size : '',
          {
            'is-plain': this.plain,
            'is-round': this.round,
            'is-circle': this.circle,
            'is-block': this.block,
            'disabled': this.disabled
          }
        ]
      }
    }
  },
  render () {
    const slots = Object.keys(this.$slots).reduce((arr, key) => arr.concat(this.$slots[key]), [])
    const listeners = {
      on: this.$listeners
    }
    return <button type="button" {...listeners} class='re-btn' {...this.className()}>
      {this.icon !== '' ? <i class={'re-icon-' + this.icon}></i> : ''}
      {slots.length ? <span>{slots}</span> : ''}
    </button>
  }
}
</script>
