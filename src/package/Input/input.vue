<script lang="tsx">
import { Component, Prop, Emit, Vue, Watch } from 'vue-property-decorator';
import { CreateElement } from 'vue';

@Component
export default class Input extends Vue {
  @Prop({
    type: String,
    default: 'text',
    validator: (value:string) => ['text', 'password', 'textarea'].some(item => value === item)
  }) readonly type!: string

  @Prop({
    type: String,
    default: '',
    validator: (value:string) => ['lg', 'sm', ''].some(item => value === item)
  }) readonly size!: string

  @Prop(String) readonly value!: string
  @Prop(Boolean) readonly clearable!: boolean
  @Prop(String) readonly iconBefore!: string
  @Prop(String) readonly iconAfter!: string

  inputValue = this.value || ''

  clearValue() {
    if(this.clearable && !this.iconAfter) {
      if (this.inputValue && this.inputValue.length) {
          const clear = (e:any) => {
            this.inputValue = ''
            const input:any = this.$refs.input
            input.focus()
            this.$emit('input',  this.inputValue)
          }

          return <div class="re-clearable" on-click={clear}><i class="re-icon-x"></i></div>
        }
    }
  }

  @Emit('input')
  changeValue(e: any) {
    this.inputValue = e.target.value
    return this.value || this.value === '' ? this.inputValue : e
  }

  @Emit('input')
  @Watch('value')
  onChagneValue(val: string, oldVal:string){
    this.inputValue = val
    return this.inputValue
  }

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
          <textarea class="re-textarea" {...inputClass} {...attrs} {...listeners} on-input={this.changeValue} ref='input'></textarea>
          { this.$attrs.maxlength ? <span class='re-textarea-maxlength'>{this.inputValue.length}/{this.$attrs.maxlength}</span> : '' }
        </div>
      } else {
        return <div class="re-from-input">
          { this.iconBefore ? <span class='re-icon-path-before'><i class={this.iconBefore}></i></span> : '' }
          <input class="re-input" type={this.type} value={this.inputValue} {...inputClass} {...attrs} {...listeners} on-input={this.changeValue} ref='input'/>
          { this.iconAfter ? <span class='re-icon-path-affter'><i class={this.iconAfter}></i></span> : '' }
          { this.clearValue() }
        </div>
      }
    }
    return <div class="re-input-group">
      { inputDom() }
    </div>
  }
}
</script>
