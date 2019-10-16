<template>
  <div>
    <div class="x-datepicker" @click.stop="()=> false">
      <x-input
        :placeholder="placeholder"
        v-model="dateTime"
        @focus="pickerShow"
        iconBefore="x-icon-watch"
        clearable
      />
      <transition name="fade-up" mode="out-in">
        <div class="x-picker" v-show="isActive">
          <div class="x-picker_header x-clearfix">
            <span class="x-icon-chevrons-left x-btn-prve" @click="changePrevYear"></span>
            <span class="x-icon-chevron-left x-btn-prve" @click="changePrevMonth"></span>
            <span>{{nowTime.year}} 年 {{nowTime.month + 1}} 月</span>
            <span class="x-icon-chevrons-right x-btn-next" @click="changeNextYear"></span>
            <span class="x-icon-chevron-right x-btn-next" @click="changeNextMonth"></span>
          </div>
          <ul class="x-picker_week x-clearfix">
            <li v-for="(week,index) in 7" :key="week">{{backWeek(index)}}</li>
          </ul>
          <ul class="x-picker_day x-clearfix">
            <li
              v-for="(item, i) in calendarData"
              :key="i"
              :class="[
                    item.type,
                    {
                        active: isAactiveDay(item),
                        today: isToDay(item)
                    }
                ]"
              @click="changeDay(item)"
            >
              <span>{{item.d}}</span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
function repair(d) {
  return d < 10 ? `0${d}` : d;
}

export default {
  name: "xDatepicker",
  props: {
    value: String,
    placeholder: String
  },
  data() {
    return {
      dateTime: "",
      nowTime: this.getNowTime(new Date()),
      isActive: false
    };
  },
  computed: {
    calendarData() {
      const getWeek =
        new Date(this.nowTime.year, this.nowTime.month, 1).getDay() || 7;
      const nowMonthBigDay = this.getYearMonthDayNum(
        this.nowTime.year,
        this.nowTime.month + 1
      );
      const prevMonthBigDay = this.getYearMonthDayNum(
        this.nowTime.year,
        this.nowTime.month
      );

      const CELL = 42;
      const nextMonthDay = CELL - nowMonthBigDay - getWeek;
      const nowMonthDay = nowMonthBigDay;
      const prevMonthDay = CELL - nowMonthDay - nextMonthDay;

      const prevMonth = this.prevMonth;
      const nowMonth = this.nowTime;
      const nextMonth = this.nextMonth;

      const CellData = [];

      for (let i = prevMonthDay; i > 0; i--) {
        const day = prevMonthBigDay - (i - 1);
        const d = repair(day);
        CellData.push({
          y: prevMonth.year,
          m: prevMonth.month + 1,
          d: d,
          type: "Prev"
        });
      }

      for (let i = 1; i <= nowMonthDay; i++) {
        const d = repair(i);
        CellData.push({
          y: nowMonth.year,
          m: nowMonth.month + 1,
          d: d,
          type: "Now"
        });
      }

      for (let i = 1; i <= nextMonthDay; i++) {
        const d = repair(i);
        CellData.push({
          y: nextMonth.year,
          m: nextMonth.month + 1,
          d: d,
          type: "Next"
        });
      }
      return CellData;
    },
    prevMonth() {
      let year = this.nowTime.year;
      let month = this.nowTime.month;
      if (month == 0) {
        year--;
        month = 11;
      } else {
        month--;
      }
      return { year, month };
    },
    nowMonth() {
      const nowTime = this.getNowTime(new Date());
      const year = nowTime.year;
      const month = nowTime.month;
      return { year, month };
    },
    nextMonth() {
      let year = this.nowTime.year;
      let month = this.nowTime.month;

      if (month == 11) {
        year++;
        month = 0;
      } else {
        month++;
      }
      return { year, month };
    }
  },
  mounted() {
    document.onclick = () => {
      this.isActive = false;
    };
  },
  methods: {
    pickerShow() {
      this.isActive = true;
    },
    getNowTime(date) {
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        days: date.getDay()
      };
    },
    backWeek(index) {
      switch (index) {
        case 0:
          return "日";
        case 1:
          return "一";
        case 2:
          return "二";
        case 3:
          return "三";
        case 4:
          return "四";
        case 5:
          return "五";
        case 6:
          return "六";
      }
    },
    changePrevYear() {
      this.nowTime.year--;
    },
    changeNextYear() {
      this.nowTime.year++;
    },
    // 上个月的事件方法
    changePrevMonth() {
      this.nowTime.year = this.prevMonth.year;
      this.nowTime.month = this.prevMonth.month;
      const month = repair(this.nowTime.month + 1);
      this.dateTime = this.nowTime.year + "-" + month + "-01";
    },

    // 下个月的事件方法
    changeNextMonth() {
      this.nowTime.year = this.nextMonth.year;
      this.nowTime.month = this.nextMonth.month;
      const month = repair(this.nowTime.month + 1);
      this.dateTime = this.nowTime.year + "-" + month + "-01";
    },
    getYearMonthDayNum(year, month) {
      var dayNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (new Date(year, 1, 29).getDate() == 29) {
        dayNum[1] = 29;
      }
      if (month - 1 < 0) {
        month = 12;
      }
      return dayNum[month - 1];
    },
    isAactiveDay({ y, m, d }) {
      const date = y + "-" + repair(m) + "-" + d;
      return this.dateTime === date;
    },
    isToDay({ d }) {
      return (
        d === this.nowTime.day && this.nowTime.month == new Date().getMonth()
      );
    },
    changeDay({ y, m, d, type }) {
      this.isActive = false;
      if (type !== "Now") {
        this["change" + type + "Month"]();
      }
      this.dateTime = y + "-" + repair(m) + "-" + d;
      this.$emit("input", this.dateTime);
    }
  }
};
</script>