<template>
  <div class="x-badge">
    <slot></slot>
    <span class="x-badge-num" :class="'x-badge-' + type">
      {{value}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'xBadge',
  props:{
    value: Number,
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
  }
}
</script>