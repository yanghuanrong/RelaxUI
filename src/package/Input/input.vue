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
      default: 'text',
      validator: value => ['text', 'password', 'textarea'].indexOf(value) !== -1
    },
    value: String,
    clearable: Boolean,
    size: {
      type: String,
      default: '',
      validator: value => ['lg', 'sm', ''].indexOf(value) !== -1
    },
    iconAfter: String,
    iconBefore: String
  },
  methods: {
    clearDom () {
      if (this.clearable && !this.iconAfter) {
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
  watch: {
    value (value) {
      this.currValue = value
      this.$emit('input', this.currValue)
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
      class: [
        this.size !== '' || this.size ? 're-input-' + this.size : '',
        this.iconAfter ? 're-input-icon-affter' : '',
        this.iconBefore ? 're-input-icon-before' : ''
      ]
    }
    
    const inputDom = () => {
      if (this.type === 'textarea') {
        return <div class="re-from-textarea">
          <textarea class="re-textarea" {...inputClass} {...attrs} {...listeners} on-input={this.changeEv} ref='input'></textarea>
          { this.$attrs.maxlength ? <span class='re-textarea-maxlength'>{this.currValue.length}/{this.$attrs.maxlength}</span> : '' }
        </div>
      } else {
        return <div class="re-from-input">
          { this.iconAfter ? <span class='re-icon-path-affter'><i class={this.iconAfter}></i></span> : '' }
          <input class="re-input" type={this.type} value={this.currValue} {...inputClass} {...attrs} {...listeners} on-input={this.changeEv} ref='input'/>
          { this.clearDom() }
          { this.iconBefore ? <span class='re-icon-path-before'><i class={this.iconBefore}></i></span> : '' }
        </div>
      }
    }
    return <div class="re-input-group">
      {/* { this.$slots.addonAfter ? <div class="re-input-group-prepend">{this.$slots.addonAfter}</div> : '' } */}
      { inputDom() }
    </div>
  }
}
</script>
