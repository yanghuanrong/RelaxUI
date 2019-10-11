<template>
    <div>
        <div class='x-calendar'>
            <div class='x-calendar_header'>
                <div class="x-calendar_header__title">{{nowTime.year}} 年 {{nowTime.mouth + 1}} 月</div>
                <x-buttonGroup>
                    <x-button plain  @click="prveMouth">上个月</x-button>
                    <x-button plain>今天</x-button>
                    <x-button plain  @click="nextMouth">下个月</x-button>
                </x-buttonGroup>
            </div>
            <ul class='x-calendar_week x-clearfix'>
                <li v-for="(week,index) in 7" :key="week">{{backWeek(index)}}</li>
            </ul>
            <ul class='x-calendar_month x-clearfix'>
                <!--上个月-->
                <li v-for='(day,index) in prveMouthDay' :key="50 + index" class='notNowDay'>
                    <x-calendarDay :value='emitData(prveMouthBigDay - prveMouthDay + index + 1)'>
                        <template>
                            <slot v-bind="emitData(prveMouthBigDay - prveMouthDay + index + 1)"></slot>
                        </template>
                    </x-calendarDay>
                </li>
                <!--本月-->
                <li v-for='day in nowMouthBigDay' :key="day" :class='{today:isToDay(day)}' @click='changeDay(day)'>
                    <x-calendarDay :value='emitData(day)'>
                        <template>
                            <slot v-bind="emitData(day)"></slot>
                        </template>
                    </x-calendarDay>
                </li>
                <!--下个月-->
                <li v-for='(day,index) in nextMouthDay' :key="100 + index" class='notNowDay'>
                    <x-calendarDay :value='emitData(day)'>
                        <template>
                            <slot v-bind="emitData(day)"></slot>
                        </template>
                    </x-calendarDay>
                </li>
            </ul>
        </div>
        <!-- <div class='x-datecalendar' @click.stop='()=> false'>
            <x-input :placeholder="placeholder" v-model="dateTime" @focus="calendarShow" iconBefore="x-icon-watch" clearable />
            <transition name="fade-up" mode="out-in">
                
            </transition>
        </div> -->
    </div>
</template>

<script>
import CalendarDay from './calendar-day'
export default {
    name: 'xCalendar',
    props: {
        value:String,
        placeholder:String
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
            return new Date(this.nowTime.year,this.nowTime.mouth,1).getDay();
        },
        prveMouthDay(){
            return this.getWeek== 0 ? 7 : this.getWeek
        },
        prveMouthBigDay(){
            return this.getYearMonthDayNum(this.nowTime.year,this.nowTime.mouth);
        },
        nowMouthBigDay(){
            return this.getYearMonthDayNum(this.nowTime.year,this.nowTime.mouth + 1);
        },
        nextMouthDay(){
            return 42 - this.nowMouthBigDay - this.prveMouthDay
        }
    },
    methods:{
        emitData(day){
            return {
                date: day,
                data: {
                    day: this.nowTime.year + '-' + (this.nowTime.mouth + 1)  + '-' + day, 
                    type: this.nowTime.month 
                }
            }
        },
        getNowTime(date){
            return {
                year:date.getFullYear(),
                mouth:date.getMonth(),
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
        prveMouth(){
            if(this.nowTime.mouth == 0){
                this.nowTime.year--
                this.nowTime.mouth = 11
            }else{
                this.nowTime.mouth--;
            }
        },
        nextMouth(){
            if(this.nowTime.mouth == 11){
                this.nowTime.year++
                this.nowTime.mouth = 0;
            }else{
                this.nowTime.mouth++;
            }
        },
        getYearMonthDayNum(year,month){   
            var dayNum = [31,28,31,30,31,30,31,31,30,31,30,31];   
            if(new Date(year,1,29).getDate()==29){   
                dayNum[1] = 29;   
            }
            if(month-1<0){
                month = 12;
            }
            return dayNum[month-1];   
        },
        isToDay(day){
            return day==this.nowTime.day && this.nowTime.mouth == new Date().getMonth()
        },
        changeDay(day){
            this.dateTime = this.nowTime.year + '-' + (this.nowTime.mouth + 1)  + '-' + day;
            this.isActive = false;
            this.$emit('input', this.dateTime);
        }
    }
};
</script>