<script>
export default {
  name: 'Input',
  data () {
    return {
      currValue: this.value
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: String
  },
  methods: {
    changeEv (e) {
      this.currValue = e.target.value
      this.$emit('input', this.currValue)
    }
  },
  render () {
    const listeners = {
      on: Object.assign({}, this.$listeners)
    }
    return <div><input type={this.type} value={this.currValue} {...listeners} on-input={this.changeEv}/></div>
  }
}
</script>
