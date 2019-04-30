<template>
  <transition name="message-move" v-on:after-leave="close" appear>
    <div class="re-message" v-show="state">
      <i :class="iconType[type]"/><span>{{content}}</span>
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
        info: 're-icon-info info',
        error: 're-icon-x-circle error',
        success: 're-icon-check-circle success',
        warning: 're-icon-alert-triangle warning',
        loading: 're-icon-loader loading'
      },
      time: this.duration || 1500
    };
  },
  props: {
    content: String,
    type: String,
    duration: {
      type: Number,
      default: 1500
    }
  },
  mounted() {
    setTimeout(() => {
      this.state = false;
    }, this.duration);
  },
  methods: {
    close() {
      if (!this.state) {
        this.$emit("onClose");
      }
    }
  }
};
</script>
