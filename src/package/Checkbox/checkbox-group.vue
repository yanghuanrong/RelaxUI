<script>
import emit from "../utils/emit";

export default {
  name: "xCheckboxGroup",
  props: {
    value: Array
  },
  data() {
    return {
      checkArray: this.value
    };
  },
  mounted() {
    this.$on("check", label => {
      let index = this.checkArray.indexOf(label)

      if (index < 0) {
        this.checkArray.push(label);
      } else {
        this.checkArray.splice(index, 1);
      }
      this.$emit('input', this.checkArray)
    });
  },
  render() {
    return <div>{this.$slots.default}</div>;
  }
};
</script>
