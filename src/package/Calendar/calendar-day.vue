<template>
  <div class="x-calendar_day">
    <div class="x-calendar_day__value">
      <p>{{value.date}}</p>
      <p>{{value.data.old_str}}</p>
    </div>
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
  }
}
</script>