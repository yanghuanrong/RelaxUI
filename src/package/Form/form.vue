<script>
import {isFunction} from '../utils/data-type'
export default {
  name: "xForm",
  props: {
    "label-position": {
      type: String,
      default: "right",
      validator: value => ["left", "right"].some(item => value === item)
    },
    "label-width": {
      type: String,
      default: "80px"
    },
    model: Object,
    rules: Object
  },
  data() {
    return {
      fields: []
    }
  },
  provide() {
    return {
      rootForm: this
    }
  },
  created() {
    this.$on("formItemPush", (field) => {
      field && this.fields.push(field)
    })
    this.$on("formItemPop", (field) => {
      field.prop && this.fields.splice(this.fields.indexOf(field), 1)
    })
  },
  methods: {
    resetFields() {
      this.fields.forEach(field => field.resetField())
    },
    validate(callback) {
      return new Promise((resolve) => {
        let valid = true
        let count = 0
        this.fields.forEach((field) => {
          field.validate("", (error) => {
            if (error) {
              valid = false
            }
            if (++count === this.fields.length) {
              resolve(valid)
              isFunction(callback) && callback(valid)
            }
          })
        })
      })
    }
  },
  render() {
    const className = ["x-form", "x-form-lable-" + this.$props.labelPosition]

    return <div class={className}>{this.$slots.default}</div>
  }
}
</script>