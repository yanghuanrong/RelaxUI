<template>
    <div>
        <div class='x-calendar'>
            <div class='x-calendar_header'>
                <div class="x-calendar_header__title">{{nowTime.year}} 年 {{nowTime.month + 1}} 月</div>
                <x-buttonGroup>
                    <x-button plain @click="changePrevMonth">上个月</x-button>
                    <x-button plain @click="changeNowMonth">本月</x-button>
                    <x-button plain @click="changeNextMonth">下个月</x-button>
                </x-buttonGroup>
            </div>
            <ul class='x-calendar_week x-clearfix'>
                <li v-for="(week,index) in 7" :key="week">{{backWeek(index)}}</li>
            </ul>
            <ul class='x-calendar_month x-clearfix'>
                <!--上个月-->
                <li 
                v-for='(day,index) in prveMonthDay' :key="50 + index" 
                class='notNowDay' 
                :class="{active: isAactiveDay(prveMonthBigDay - prveMonthDay + index + 1, prveMonth)}"
                @click='changeDay({
                    y: prveMonth.year,
                    m: prveMonth.month,
                    d: prveMonthBigDay - prveMonthDay + index + 1,
                    type: "Prev",
                })'>
                    <x-calendarDay :value='emitData(prveMonthBigDay - prveMonthDay + index + 1, prveMonth)'>
                        <template>
                            <slot v-bind="emitData(prveMonthBigDay - prveMonthDay + index + 1, prveMonth)"></slot>
                        </template>
                    </x-calendarDay>
                </li>
                <!--本月-->
                <li v-for='day in nowMonthBigDay' :key="day" 
                :class='{today:isToDay(day), active: isAactiveDay(day, nowTime)}' 
                @click='changeDay({
                    y: nowTime.year,
                    m: nowTime.month,
                    d: day,
                    type: "Now", 
                })'>
                    <x-calendarDay :value='emitData(day, nowTime)'>
                        <template>
                            <slot v-bind="emitData(day, nowTime)"></slot>
                        </template>
                    </x-calendarDay>
                </li>
                <!--下个月-->
                <li v-for='(day,index) in nextMonthDay' :key="100 + index" 
                class='notNowDay' 
                :class="{active: isAactiveDay(day, nextMonth)}"
                @click='changeDay({
                    y: nextMonth.year,
                    m: nextMonth.month,
                    d: day,
                    type: "Next", 
                })'>
                    <x-calendarDay :value='emitData(day, nextMonth)'>
                        <template>
                            <slot v-bind="emitData(day, nextMonth)"></slot>
                        </template>
                    </x-calendarDay>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import CalendarDay from './calendar-day'
import calendar from './format'

function repair(d){
    return d < 10 ? `0${d}` : d
}

export default {
    name: 'xCalendar',
    props: {
        value:String,
    },
    components:{
        'x-calendarDay': CalendarDay
    },
    data(){
        const nowTime = this.getNowTime(new Date())

        const y = nowTime.year
        const m = repair(nowTime.month + 1)
        const d = repair(new Date().getDate())
        const dateTime = y + '-' + m + '-' + d
        
        return {
            dateTime: dateTime,
            active: '',
            nowTime: nowTime,
        }
    },
    computed:{
        getWeek(){
            return new Date(this.nowTime.year,this.nowTime.month,1).getDay();
        },
        prveMonthDay(){
            return this.getWeek == 0 ? 7 : this.getWeek
        },
        prveMonthBigDay(){
            return this.getYearMonthDayNum(this.nowTime.year,this.nowTime.month);
        },
        nowMonthBigDay(){
            return this.getYearMonthDayNum(this.nowTime.year,this.nowTime.month + 1);
        },
        prveMonth(){
            let year = this.nowTime.year
            let month = this.nowTime.month
            if(month == 0){
                year --
                month = 11
            }else{
                month --
            }
            return {year, month}
        },
        nowMonth(){
            const nowTime = this.getNowTime(new Date())
            const year = nowTime.year
            const month = nowTime.month
            return {year, month}
        },
        nextMonth(){
            let year = this.nowTime.year
            let month = this.nowTime.month

            if(month == 11){
                year ++
                month = 0
            }else{
                month ++
            }
            return {year, month}
        },
        nextMonthDay(){
            return 42 - this.nowMonthBigDay - this.prveMonthDay
        }
    },
    methods:{
        // 暴露给用户的数据
        emitData(day, {month, year}){
            const y = year
            const m = repair(month + 1)
            const d = repair(day)
            
            const data = calendar.lunar2solar(year, month + 1, day)
            return {
                date: d,
                data: {
                    day: y + '-' + m  + '-' + d,
                    holiday: data.old_str,
                    lunar: data.IDayCn,
                    week: data.ncWeek,
                }
            }
        },

        // 上个月的事件方法
        changePrevMonth(){
            this.nowTime.year = this.prveMonth.year
            this.nowTime.month = this.prveMonth.month
            const month = repair(this.nowTime.month + 1)
            this.dateTime = this.nowTime.year + '-' + month + '-01'
        },

        // 下个月的事件方法
        changeNextMonth(){
            this.nowTime.year = this.nextMonth.year
            this.nowTime.month = this.nextMonth.month
            const month = repair(this.nowTime.month + 1)
            this.dateTime = this.nowTime.year + '-' + month + '-01'
        },

        // 本月的事件方法
        changeNowMonth(){
            this.nowTime.year = this.nowMonth.year
            this.nowTime.month = this.nowMonth.month
        },

        // 选中的日期
        changeDay(data){
            if(data.type !== 'Now'){
                this['change'+ data.type +'Month']()
            }
            const m = repair(data.m + 1)
            const d = repair(data.d)
            this.dateTime = data.y + '-' + m + '-' + d
            this.$emit('input', this.dateTime);
        },
        isAactiveDay(day, {year, month}){
            const y = year
            const m = repair(month + 1)
            const d = repair(day)
            return this.dateTime === (y + '-' + m + '-' + d)
        },
        isToDay(day){
            return day == this.nowTime.day && this.nowTime.month == new Date().getMonth()
        },
        getNowTime(date){
            return {
                year:date.getFullYear(),
                month:date.getMonth(),
                day:date.getDate(),
                days:date.getDay(),
            }
        },
        getYearMonthDayNum(year,month){   
            var dayNum = [31,28,31,30,31,30,31,31,30,31,30,31];   
            if(new Date(year,1,29).getDate() == 29){   
                dayNum[1] = 29;   
            }
            if( month - 1 < 0 ){
                month = 12;
            }
            return dayNum[month-1];   
        },
        backWeek(index){
            switch(index){
                case 0:
                    return '日'
                case 1:
                    return '一'
                case 2:
                    return '二'
                case 3:
                    return '三'
                case 4:
                    return '四'
                case 5:
                    return '五'
                case 6:
                    return '六'
            }
        },
    }
};
</script>