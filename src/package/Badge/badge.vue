<template>
  <div class="x-badge">
    <slot></slot>
    <span class="x-badge-num" :class="['x-badge-' + type, dot && 'x-badge-dot']">
      {{val}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'xBadge',
  props:{
    value: [Number, String],
    max: Number,
    dot: Boolean,
    type: {
      type: String,
      default: 'danger',
      validator: value =>
        [
          'success',
          'primary',
          'warning',
          'info',
          'danger',
        ].some(item => value === item)
    }
  },
  computed:{
    val(){
      return this.value > this.max ? this.max + '+' : this.value
    }
  }
}
</script>