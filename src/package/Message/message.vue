<template>
  <transition name="message-move" v-on:after-leave="close" appear>
    <div class="re-message" v-show="state">
      <i class="re-icon-alert-circle"/>
      {{content}}
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
    setTimeout(() => {
      this.state = false;
    }, this.duration);
  },
  methods: {
    close() {
      if (!this.state) {
        this.$emit('onClose');
      }
    }
  }
};
</script>
