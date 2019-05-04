<template>
  <transition name="notice-move" v-on:before-leave="beforeLeave" v-on:leave="leave" v-on:after-leave="close" appear>
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
import { addClass, delClass } from "../utils/dom";
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
    beforeLeave(el) {
      if (!el.dataset) {
        el.dataset = {};
      }
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        addClass(el, "transition");
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    },
    hide() {
      this.state = false;
    },
    close(el) {
      delClass(el, "transition");
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;

      if (!this.state) {
        this.$emit("onClose");
      }
    }
  }
};
</script>
