<script>
export default {
  name: 'xButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value =>
        [
          'success',
          'primary',
          'warning',
          'info',
          'danger',
          'default',
          'text'
        ].some(item => value === item)
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '',
      validator: value => ['lg', 'sm', ''].some(item => value === item)
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  render() {
    const className = {
      class: [
        this.type && 'x-btn-' + this.type,
        this.size !== '' || this.size ? 'x-btn-' + this.size : '',
        {
          'is-plain': this.plain,
          'is-round': this.round,
          'is-circle': this.circle,
          'is-block': this.block,
          'disabled': this.disabled
        },
        this.loading && 'x-btn-loading'
      ]
    };

    const slots = Object.keys(this.$slots).reduce(
      (arr, key) => arr.concat(this.$slots[key]),
      []
    );

    const listeners = {
      on: !(this.loading || this.disabled) ? this.$listeners : null
    };

    return (
      <button type='button' {...listeners} class='x-btn' {...className}>
        {this.icon !== '' ? <i class={this.icon} /> : ''}
        {this.loading && <i class='x-icon-loader' />}
        {slots.length ? <span>{this.$slots.default}</span> : ''}
      </button>
    );
  }
};
</script>
