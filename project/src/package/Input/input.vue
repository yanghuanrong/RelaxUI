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
    value: String,
    clearable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    changeEv (e) {
      this.currValue = e.target.value
      this.$emit('input', this.currValue)
    },
    clearDom () {
      if (this.clearable && this.currValue) {
        if (this.currValue.length) {
          return <div class="re-clearable" on-click={() => { this.currValue = ''; this.$emit('input', this.currValue) }}><i class="re-icon-x"></i></div>
        }
      }
    }
  },
  render () {
    const listeners = {
      on: this.$listeners
    }
    delete listeners['on']['input']

    const attrs = {
      attrs: this.$attrs
    }
    return <div class="re-form-control">
      <div class="re-from-input">
        <input class="re-input" type={this.type} value={this.currValue} {...attrs} {...listeners} on-input={this.changeEv}/>
        { this.clearDom() }
      </div>
    </div>
  }
}
</script>
