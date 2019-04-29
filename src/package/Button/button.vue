<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "default",
      validator: value =>
        [
          "success",
          "primary",
          "warning",
          "info",
          "danger",
          "default",
          "text"
        ].some(item => value === item)
    },
    icon: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "",
      validator: value => ["lg", "sm", ""].some(item => value === item)
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  methods: {},
  render() {
    const className = {
      class: [
        this.type && "re-btn-" + this.type,
        this.size !== "" || this.size ? "re-btn-" + this.size : "",
        {
          "is-plain": this.plain,
          "is-round": this.round,
          "is-circle": this.circle,
          "is-block": this.block,
          "disabled": this.disabled
        },
        this.loading && "re-btn-loading"
      ]
    };

    const slots = Object.keys(this.$slots).reduce(
      (arr, key) => arr.concat(this.$slots[key]),
      []
    );

    const listeners = {
      on: !(this.loading || this.disabled) ? this.$listeners : null
    };

    return (
      <button type="button" {...listeners} class="re-btn" {...className}>
        {this.icon !== "" ? <i class={this.icon} /> : ""}
        {this.loading && <i class="re-icon-loader" />}
        {slots.length ? <span>{this.$slots.default}</span> : ""}
      </button>
    );
  }
};
</script>
