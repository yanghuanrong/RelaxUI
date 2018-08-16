<script>
export default {
  name: 'Input',
  data () {
    return {
      currValue: this.value || ''
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
      default: false
    },
    size: {
      type: String,
      default: '',
      validator: value => ['lg', 'sm', ''].indexOf(value) !== -1
    }
  },
  methods: {
    clearDom () {
      if (this.clearable) {
        if (this.currValue && this.currValue.length) {
          const clear = (e) => {
            this.currValue = ''; this.$emit('input', this.currValue)
            this.$refs.input.focus()
          }
          return <div class="re-clearable" on-click={clear}><i class="re-icon-x"></i></div>
        }
      }
    },
    changeEv (e) {
      this.currValue = e.target.value
      this.$emit('input', this.value || this.value === '' ? this.currValue : e)
    }
  },
  render () {
    const listeners = {
      on: Object.assign({}, this.$listeners)
    }
    delete listeners['on']['input']

    const attrs = {
      attrs: this.$attrs
    }

    const inputClass = {
      class: [this.size !== '' || this.size ? 're-input-' + this.size : '']
    }

    return <div class="re-form-control">
      <div class="re-from-input">
        <input class="re-input" type={this.type} value={this.currValue} {...inputClass} {...attrs} {...listeners} on-input={this.changeEv} ref='input'/>
        { this.clearDom() }
      </div>
    </div>
  }
}
</script>
