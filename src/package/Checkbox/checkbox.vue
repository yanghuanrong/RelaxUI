<script>
import emit from '../utils/emit'

export default {
  name: 'xCheckbox',
  mixins: [emit],
  props: {
    value: Boolean,
    label: String,
    checked: Boolean,
    disabled: Boolean
  },
  data () {
    return {
      checkedVal: this.value
    }
  },
  created(){
    const rootCheck = this.$parent.checkArray
    if(rootCheck){
      if(rootCheck.some((item) => item === this.label)){
        this.stop()
      }
    }
  },
  methods: {
    stop (e) {
      if(this.disabled) return
      e && e.preventDefault()
      this.checkedVal = !this.checkedVal
      this.$emit('change', this.checked)
      this.$emit('input', this.checked)
      this.dispatch('xCheckboxGroup', 'check', this.label)
    }
  },
  render () {
    const value = this.$slots.default || this.label
    const className = ['x-checkbox']
    const check = this.checked || this.checkedVal
    check && className.push('x-checkbox-checked')
    this.disabled && className.push('x-checkbox-disabled')

    return <label class={className} onClick={this.stop}>
      <input type="checkbox" name={this.label} disabled={this.disabled}/>
      <span>{value}</span>
    </label>
  }
}
</script>
