<template>
  <div class="x-calendar_day" :title="title">
    <div class="x-calendar_day__value">
      <p>{{value.date}}</p>
      <p>{{value.data.holiday}}</p>
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
  },
  computed:{
    title(){
      const D = this.value.data.day.split('-')
      const y = parseInt(D[0])
      const m = parseInt(D[1])
      const d = parseInt(D[2])
      return y + '年' + m + '月' + d + '日'
    }
  }
}
</script>