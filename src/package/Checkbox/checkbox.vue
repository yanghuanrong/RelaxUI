<script>
export default {
  name: 'Checkbox',
  props: {
    value: Boolean,
    label: [String, Number, Boolean]
  },
  methods: {
    changeEv (e) {
      this.$emit('input', e.target.checked)
      this.$emit('change', e.target.checked)
    }
  },
  render () {
    let value = this.$slots.default || this.label
    return <label class="re-checkbox checkbox-primary">
      <input type="checkbox" name={this.name} disabled={this.disabled} checked={this.value} onChange={ this.changeEv } />
      <span>&nbsp;{value}</span>
    </label>
  }
}
</script>
