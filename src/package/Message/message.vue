<script>
import { setTimeout } from "timers";
export default {
  name: "message",
  data() {
    return {
      state: false,
      time: this.duration || 1500
    };
  },
  props: {
    content: String,
    duration: {
      type: Number,
      default: 1500
    }
  },
  mounted() {
    this.state = true;
    setTimeout(() => {
      this.state = false;
    }, this.duration);
  },
  methods: {
    onClose() {
      if (!this.state) {
        this.$emit("onClose");
      }
    }
  },
  render() {
    const moveon = {
      on: {
        "leave-cancelled": "onClose"
      }
    };
    return (
      <transition name="message-move" {...moveon}>
        <div class="re-message" v-show={this.state}>
          <i class="re-icon-alert-circle" />
          {this.content}
        </div>
      </transition>
    );
  }
};
</script>
