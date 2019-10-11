<template>
  <div class="x-calendar_day">
    <div class="x-calendar_day__value">{{value.date}}</div>
    <div class="x-calendar_day__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'xCalendarDay',
  props:{
    value: Object
  },
}
</script>