<template>
    <div>
        <div class='x-calendar'>
            <div class='x-calendar_header'>
                <div class="x-calendar_header__title">{{nowTime.year}} 年 {{nowTime.month + 1}} 月</div>
                <x-buttonGroup>
                    <x-button plain @click="changePrevMonth">上个月</x-button>
                    <x-button plain @click="changeNowMonth">今日</x-button>
                    <x-button plain @click="changeNextMonth">下个月</x-button>
                </x-buttonGroup>
            </div>
            <ul class='x-calendar_week x-clearfix'>
                <li v-for="(week,index) in 7" :key="week">{{backWeek(index)}}</li>
            </ul>
            <ul class='x-calendar_month x-clearfix'>
                <li v-for='(item,index) in calendarData' :key="index" 
                :class="[
                    item.type,
                    {
                        active: isAactiveDay(item),
                        today: isToDay(item)
                    }
                ]"
                @click='changeDay(item)'>
                    <x-calendarDay :value='emitData(item)'>
                        <template>
                            <slot v-bind="emitData(item)"></slot>
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
        return {
            dateTime: '',
            active: '',
            nowTime: this.getNowTime(new Date()),
        }
    },
    created(){
        this.dateTime = this.getToday()
    },
    computed:{
        calendarData(){
            const getWeek = new Date(this.nowTime.year, this.nowTime.month, 1).getDay() || 7
            const nowMonthBigDay = this.getYearMonthDayNum(this.nowTime.year,this.nowTime.month + 1);
            const prevMonthBigDay = this.getYearMonthDayNum(this.nowTime.year,this.nowTime.month)

            const CELL = 42
            const nextMonthDay = CELL - nowMonthBigDay - getWeek
            const nowMonthDay = this.getYearMonthDayNum(this.nowTime.year, this.nowTime.month + 1)
            const prevMonthDay = CELL - nowMonthDay - nextMonthDay

            const prevMonth = this.prevMonth
            const nowMonth = this.nowTime
            const nextMonth = this.nextMonth

            const CellData = []

            for(let i = prevMonthDay; i > 0; i--) {
                const day = prevMonthBigDay - (i - 1)
                CellData.push({
                    y: prevMonth.year,
                    m: prevMonth.month + 1,
                    d: day,
                    type: 'Prev'
                })
            }

            for(let i = 1; i <= nowMonthDay; i++){
                const day = i
                CellData.push({
                    y: nowMonth.year,
                    m: nowMonth.month + 1,
                    d: day,
                    type: 'Now'
                })
            }

            for(let i = 1; i <= nextMonthDay; i++){
                const day = i
                CellData.push({
                    y: nextMonth.year,
                    m: nextMonth.month + 1,
                    d: day,
                    type: 'Next'
                })
            }

            return CellData
        },
        prevMonth(){
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
        }
    },
    methods:{
        // 暴露给用户的数据
        emitData(props){
            const data = calendar.lunar2solar(props.y, props.m, props.d)
            const y = props.y
            const m = repair(props.m)
            const d = repair(props.d)
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
            this.nowTime.year = this.prevMonth.year
            this.nowTime.month = this.prevMonth.month
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
            this.dateTime = this.getToday()
        },

        // 选中的日期
        changeDay({y, m, d, type}){
            if(type !== 'Now'){
                this['change'+ type +'Month']()
            }
            this.dateTime = y + '-' + repair(m) + '-' + repair(d)
            this.$emit('input', this.dateTime);
        },
        isAactiveDay({y, m, d}){
            const date = y + '-' + repair(m) + '-' + repair(d)
            return this.dateTime === date
        },
        isToDay({d}){
            return d === this.nowTime.day && this.nowTime.month == new Date().getMonth()
        },
        getToday(){
            const y = this.nowTime.year
            const m = repair(this.nowTime.month + 1)
            const d = repair(new Date().getDate())
            return y + '-' + m + '-' + d
        },
        getNowTime(date){
            return {
                year:date.getFullYear(),
                month:date.getMonth(),
                day:date.getDate(),
                days:date.getDay(),
            }
        },
        getYearMonthDayNum(year, month){   
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