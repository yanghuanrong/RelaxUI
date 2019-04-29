<script>
export default {
  name: 'Checkbox',
  props: {
    value: Boolean,
    label: [String, Number, Boolean]
  },
  data () {
    return {
      checked: this.value
    }
  },
  methods: {
    stop (e) {
      e.preventDefault()
      this.checked = !this.checked
      this.$emit('change', this.checked)
      this.$emit('input', this.checked)
    }
  },
  render () {
    let value = this.$slots.default || this.label
    return <label class="re-checkbox checkbox-primary" onClick={this.stop}>
      <input type="checkbox" name={this.name} disabled={this.disabled} checked={this.checked} />
      <span>&nbsp;{value}</span>
    </label>
  }
}
</script>
