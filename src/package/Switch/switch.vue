<template>
  <button class="x-switch" @click="clickHandle" :class="{'x-switch-checked': isChecked}">
    <span class="x-switch-inner"></span>
    <div class="x-click-animating-node"></div>
  </button>
</template>

<script>
export default {
  name: "xSwitch",
  props: {
    value: Boolean
  },
  data(){
    return {
      isChecked: this.value
    }
  },
  methods: {
    clickHandle(){
      this.isChecked = !this.isChecked
      this.$emit('input', this.isChecked)
    }
  },
}
</script>
