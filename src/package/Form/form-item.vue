<script>
import AsyncValidator from "async-validator";

export default {
  name: "xFormItem",
  inject: ["rootForm"],
  props: {
    label: String,
    prop: String
  },
  data(){
    return {
      isRequired: false,
      isShowTips: false,
      message: ''
    }
  },
  computed: {
    fieldValue() {
      return this.rootForm.model[this.prop]
    }
  },
  mounted() {
    this.setRules();
  },
  methods: {
    setRules() {
      let rules = this.getRules();
      if (rules.length) {
        rules.forEach(rule => {
          if (rule.required) {
            this.isRequired = rule.required;
          }
        });
      }
      this.$on("blur", this.onFieldBlur);
    },
    getRules() {
      let formRules = this.rootForm.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return formRules;
    },
    // 过滤出符合要求的 rule 规则
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
    },
    validate(trigger, callback) {
      const rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) {
        return true
      }
      
      const validator = new AsyncValidator({ [this.prop]: rules });
      const model = { [this.prop]: this.fieldValue };
      validator.validate(model, { firstFields: true }, (err) => {
        this.isShowTips = err ? true : false;
        this.message = err ? err[0].message : '';
        callback && callback(this.message);
      });
    },
    // resetField() {
    //   this.message = "";
    //   this.form.model[this.prop] = this.initialValue;
    // },
    onFieldBlur() {
      this.validate("blur");
    },
    // onFieldChange() {
    //   this.validate("change");
    // }
  },
  render() {
    const labelWidth = `width:${this.rootForm.labelWidth}`;
    const lableCalssName = ['x-form-lable']

    this.isRequired && lableCalssName.push('x-form-label-required')
    
    const errprTips = <div class="x-form-error-tips">{this.message}</div>
    
    return (
      <div class="x-form-item">
        <label class={lableCalssName} style={labelWidth}>
          {this.label}
        </label>
        <div class="x-form-input-wrapper">
          {this.$slots.default}
          {this.isShowTips && errprTips}
        </div>
      </div>
    );
  }
};
</script>
