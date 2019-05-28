<script>
export default {
  name: "xFormItem",
  inject: ["rootForm"],
  props: {
    label: String,
    prop: String
  },
  render() {
    const labelWidth = `width:${this.rootForm.labelWidth}`
    
    this.$on('input', () => {
      console.log(1)
    })

    return (
      <div class="x-form-item">
        <label class="x-form-lable" style={labelWidth}>{this.label}</label>
        <div class="x-form-input-wrapper">
          {this.$slots.default}
          <div class="x-form-error-tips" />
        </div>
      </div>
    );
  }
};
</script>
