<template>
  <transition name="message-move" v-on:after-leave="close" appear>
    <div class="re-message" v-show="state">
      <span><i :class="iconType[type]"/>{{content}}</span>
    </div>
  </transition>
</template>
<script>
import { setTimeout } from "timers";
export default {
  name: "message",
  data() {
    return {
      state: true,
      iconType: {
        info: "re-icon-info info",
        error: "re-icon-x-circle error",
        success: "re-icon-check-circle success",
        warning: "re-icon-alert-triangle warning",
        loading: "re-icon-loader loading"
      },
      time: this.duration
    };
  },
  props: {
    content: String,
    type: String,
    duration: {
      type: Number,
      default: 1.5
    }
  },
  mounted() {
    if (this.duration) {
      setTimeout(this.hide, this.duration * 1000);
    }
  },
  methods: {
    hide() {
      this.state = false;
    },
    close() {
      if (!this.state) {
        this.$emit("onClose");
      }
    }
  }
};
</script>
