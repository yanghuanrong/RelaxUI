<template>
  <transition name="notice-move" v-on:after-leave="close" appear>
    <div class="x-notice-content-rect" v-show="state">
      <div class="x-notice-content">
        <span class="x-notice-icon">
          <i :class="iconType[type]"/>
        </span>
        <div class="x-notice-title">{{title}}</div>
        <div class="x-notice-description" v-if="desc">{{desc}}</div>

        <span class="x-notice-close">
          <i class="x-icon-x"></i>
        </span>
      </div>
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
        info: "x-icon-info info",
        error: "x-icon-x-circle error",
        success: "x-icon-check-circle success",
        warning: "x-icon-alert-triangle warning",
        loading: "x-icon-loader loading"
      },
      time: this.duration
    };
  },
  props: {
    title: String,
    desc: String,
    type: String,
    duration: {
      type: Number,
      default: 4.5
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
