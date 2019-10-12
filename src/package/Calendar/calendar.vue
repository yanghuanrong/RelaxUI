<template>
    <div>
        <div class='x-calendar'>
            <div class='x-calendar_header'>
                <div class="x-calendar_header__title">{{nowTime.year}} 年 {{nowTime.month + 1}} 月</div>
                <x-buttonGroup>
                    <x-button plain @click="changePrveMouth">上个月</x-button>
                    <x-button plain @click="changeNowMouth">本月</x-button>
                    <x-button plain @click="changeNextMouth">下个月</x-button>
                </x-buttonGroup>
            </div>
            <ul class='x-calendar_week x-clearfix'>
                <li v-for="(week,index) in 7" :key="week">{{backWeek(index)}}</li>
            </ul>
            <ul class='x-calendar_month x-clearfix'>
                <!--上个月-->
                <li v-for='(day,index) in prveMouthDay' :key="50 + index" class='notNowDay'>
                    <x-calendarDay :value='emitData(prveMouthBigDay - prveMouthDay + index + 1, prveMouth)'>
                        <template>
                            <slot v-bind="emitData(prveMouthBigDay - prveMouthDay + index + 1, prveMouth)"></slot>
                        </template>
                    </x-calendarDay>
                </li>
                <!--本月-->
                <li v-for='day in nowMouthBigDay' :key="day" :class='{today:isToDay(day)}' @click='changeDay(day)'>
                    <x-calendarDay :value='emitData(day, nowTime)'>
                        <template>
                            <slot v-bind="emitData(day, nowTime)"></slot>
                        </template>
                    </x-calendarDay>
                </li>
                <!--下个月-->
                <li v-for='(day,index) in nextMouthDay' :key="100 + index" class='notNowDay'>
                    <x-calendarDay :value='emitData(day, nextMouth)'>
                        <template>
                            <slot v-bind="emitData(day, nextMouth)"></slot>
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
            nowTime: this.getNowTime(new Date()),
        }
    },
    computed:{
        getWeek(){
            return new Date(this.nowTime.year,this.nowTime.month,1).getDay();
        },
        prveMouthDay(){
            return this.getWeek == 0 ? 7 : this.getWeek
        },
        prveMouthBigDay(){
            return this.getYearMonthDayNum(this.nowTime.year,this.nowTime.month);
        },
        nowMouthBigDay(){
            return this.getYearMonthDayNum(this.nowTime.year,this.nowTime.month + 1);
        },
        prveMouth(){
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
        nowMouth(){
            const nowTime = this.getNowTime(new Date())
            const year = nowTime.year
            const month = nowTime.month
            return {year, month}
        },
        nextMouth(){
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
        nextMouthDay(){
            return 42 - this.nowMouthBigDay - this.prveMouthDay
        }
    },
    methods:{
        // 暴露给用户的数据
        emitData(day, {month, year}){
            const y = repair(year)
            const m = repair(month + 1)
            const d = repair(day)
            console.log(y + '-' + m  + '-' + d)
            return {
                date: d,
                data: {
                    day: y + '-' + m  + '-' + d, 
                    ...calendar.lunar2solar(year, month + 1, day)
                }
            }
        },
        changePrveMouth(){
            this.nowTime.year = this.prveMouth.year
            this.nowTime.month = this.prveMouth.month
        },
        changeNextMouth(){
            this.nowTime.year = this.nextMouth.year
            this.nowTime.month = this.nextMouth.month
        },
        changeNowMouth(){
            this.nowTime.year = this.nowMouth.year
            this.nowTime.month = this.nowMouth.month
        },
        getYearMonthDayNum(year,month){   
            var dayNum = [31,28,31,30,31,30,31,31,30,31,30,31];   
            if(new Date(year,1,29).getDate() == 29){   
                dayNum[1] = 29;   
            }
            if(month-1 < 0 ){
                month = 12;
            }
            return dayNum[month-1];   
        },
        isToDay(day){
            return day==this.nowTime.day && this.nowTime.month == new Date().getMonth()
        },
        changeDay(day){
            let d = day < 10 ? `0${day}` : day
            this.dateTime = this.nowTime.year + '-' + (this.nowTime.month + 1)  + '-' + d;
            this.isActive = false;
            this.$emit('input', this.dateTime);
        },
        getNowTime(date){
            return {
                year:date.getFullYear(),
                month:date.getMonth(),
                day:date.getDate(),
                days:date.getDay(),
            }
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