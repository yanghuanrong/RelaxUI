<script>
export default {
  name: "xSwitch",
  props: {
    value: Boolean,
    type: {
      type: String,
      default: 'primary',
      validator: value =>
        [
          'success',
          'primary',
          'warning',
          'info',
          'danger',
        ].some(item => value === item)
    },
  },
  data(){
    return {
      isChecked: this.value,
      inner: ''
    }
  },
  methods: {
    clickHandle(){
      this.isChecked = !this.isChecked
      this.$emit('input', this.isChecked)
      this.$emit('change', this.isChecked)
    }
  },
  render(){
    const className = {
      class: [
        'x-switch',
        this.type && 'x-switch-' + this.type,
      ]
    }
    this.isChecked && className.class.push('x-switch-checked')

    return <button onClick={this.clickHandle} {...className}>
    <span class="x-switch-inner">
      {this.isChecked ? this.$slots.open : this.$slots.close}
    </span>
    <div class="x-click-animating-node"></div>
  </button>
  }
}
</script>
