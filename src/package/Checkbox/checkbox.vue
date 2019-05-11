<script>
import emit from '../utils/emit'

export default {
  name: 'xCheckbox',
  mixins: [emit],
  props: {
    value: Boolean,
    label: String,
    disabled: Boolean
  },
  data () {
    return {
      checked: this.value
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
      e && e.preventDefault()
      this.checked = !this.checked
      this.$emit('change', this.checked)
      this.$emit('input', this.checked)
      this.dispatch('xCheckboxGroup', 'check', this.label)
    }
  },
  render () {
    let value = this.$slots.default || this.label
    return <label class="x-checkbox checkbox-primary" onClick={this.stop}>
      <input type="checkbox" name={this.label} disabled={this.disabled} checked={this.checked} />
      <span>{value}</span>
    </label>
  }
}
</script>
