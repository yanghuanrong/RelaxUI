
<script>
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
    rules: Object,
  },
  provide() {
    return {
      rootForm: this
    };
  },
  render() {
    const className = ["x-form", "x-form-lable-" + this.$props.labelPosition ];
    
    return <div class={className}>
      {this.$slots.default}
    </div>
  }
};
</script>