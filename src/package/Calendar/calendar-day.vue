<template>
  <div class="x-calendar_day">
    <div class="x-calendar_day__value">
      <p>{{value.date}}</p>
      <p>{{day.IDayCn}}</p>
      <p style="height: 30px;">{{day.old_str}}</p>
    </div>
    <div class="x-calendar_day__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import calendar from './format'
export default {
  name:'xCalendarDay',
  props:{
    value: Object
  },
  computed:{
    day(){
      const date = this.value.data.day.split('-')
      const y = parseInt(date[0])
      const m = parseInt(date[1])
      const d = parseInt(date[2])
      console.log(
       y,m,d
      )
      return calendar.solar2lunar(y,m,d)
    }
  }
}
</script>