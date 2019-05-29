<script>
import AsyncValidator from 'async-validator'
import emit from '../utils/emit'

export default {
  name: 'xFormItem',
  inject: ['rootForm'],
  mixins: [emit],
  props: {
    label: String,
    prop: String
  },
  data() {
    return {
      isRequired: false,
      isShowTips: false,
      isSuccess: false,
      message: ''
    }
  },
  computed: {
    fieldValue() {
      return this.rootForm.model[this.prop]
    }
  },
  mounted() {
    if (this.prop) {
      this.initialValue = this.fieldValue
      this.dispatch('xForm', 'formItemPush', this)
    }
    this.setRules()
  },
  beforeDestroy() {
    this.dispatch('xForm', 'formItemPop', this)
  },
  methods: {
    setRules() {
      let rules = this.getRules()

      if (rules && rules.length) {
        rules.forEach(rule => {
          if (rule.required) {
            this.isRequired = rule.required
          }
        })
      }
      this.$on('blur', this.onFieldBlur)
    },
    getRules() {
      let formRules = this.rootForm.rules
      formRules = formRules ? formRules[this.prop] : []
      return formRules
    },

    getFilteredRule(trigger) {
      const rules = this.getRules()
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      )
    },
    validate(trigger, callback) {
      const rules = this.getFilteredRule(trigger)

      if (!rules || rules.length === 0) {
        return true
      }

      const validator = new AsyncValidator({ [this.prop]: rules })
      const model = { [this.prop]: this.fieldValue }
      validator.validate(model, { firstFields: true }, err => {
        this.isShowTips = err ? true : false
        this.message = err ? err[0].message : ''
        this.isSuccess = err ? false : true
        callback && callback(this.message)
      })
    },
    resetField() {
      this.message = ''
      this.isShowTips = false
      this.isSuccess = false
      this.rootForm.model[this.prop] = this.initialValue
    },
    onFieldBlur() {
      this.validate('blur')
    }
  },
  render() {
    const labelWidth = `width:${this.rootForm.labelWidth}`
    const lableCalssName = ['x-form-lable']
    this.isRequired && lableCalssName.push('x-form-label-required')

    const wrapperClassNmae = ['x-form-input-wrapper']
    this.isShowTips && wrapperClassNmae.push('x-form-input-wrapper__error')
    this.isSuccess && wrapperClassNmae.push('x-form-input-wrapper__success')
    const errprTips = <div class='x-form-error-tips'>{this.message}</div>

    return (
      <div class='x-form-item'>
        <label class={lableCalssName} style={labelWidth}>
          {this.label}
        </label>
        <div class={wrapperClassNmae}>
          {this.$slots.default}
          {this.isShowTips && errprTips}
        </div>
      </div>
    )
  }
}
</script>
