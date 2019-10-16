<template>
    <div>
        <div class='x-datepicker' @click.stop='()=> false'>
            <x-input :placeholder="placeholder" v-model="dateTime" @focus="pickerShow" iconBefore="x-icon-watch" clearable />
            <transition name="fade-up" mode="out-in">
                <div class='x-picker' v-show='isActive'>
                    <div class='x-picker_header x-clearfix'>
                        <span class='x-icon-chevrons-left x-btn-prve' @click="prveYear"></span>
                        <span class='x-icon-chevron-left x-btn-prve' @click="prveMonth"></span>
                        <span>{{nowTime.year}} 年 {{nowTime.month + 1}} 月</span>
                        <span class='x-icon-chevrons-right x-btn-next' @click="nextYear"></span>
                        <span class='x-icon-chevron-right x-btn-next' @click="nextMonth"></span>
                    </div>
                    <ul class='x-picker_week x-clearfix'>
                        <li v-for="(week,index) in 7" :key="week">{{backWeek(index)}}</li> 
                    </ul>
                    <ul class='x-picker_day x-clearfix'>
                        <li v-for='(day,index) in prveMonthDay' :key="50 + index" class='notNowDay'>{{prveMonthBigDay - prveMonthDay + index + 1}}</li>
                        <li v-for='day in nowMonthBigDay' :key="day" :class='{today:isToDay(day)}' @click='changeDay(day)'>{{day}}</li>
                        <li v-for='(day,index) in nextMonthDay' :key="100 + index" class='notNowDay'>{{day}}</li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'xDatepicker',
    props: {
        value:String,
        placeholder:String
    },
    data(){
        return {
            dateTime:'',
            nowTime: this.getNowTime(new Date()),
            isActive: false
        }
    },
    computed:{
        getWeek(){
            return new Date(this.nowTime.year,this.nowTime.month,1).getDay();
        },
        prveMonthDay(){
            return this.getWeek==0?7:this.getWeek
        },
        prveMonthBigDay(){
            let a = this.getYearMonthDayNum(this.nowTime.year,this.nowTime.month);
            return a;
        },
        nowMonthBigDay(){
            return this.getYearMonthDayNum(this.nowTime.year,this.nowTime.month + 1);
        },
        nextMonthDay(){
            return 42 - this.nowMonthBigDay - this.prveMonthDay
        }

    },
    methods:{
        pickerShow(){
            this.isActive = true;
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
        prveYear(){
            this.nowTime.year--;
        },
        nextYear(){
            this.nowTime.year++;
        },
        prveMonth(){
            if(this.nowTime.month==0){
                this.nowTime.year--;
                this.nowTime.month = 11;
            }else{
                this.nowTime.month--;
            }
        },
        nextMonth(){
            if(this.nowTime.month==11){
                this.nowTime.year++;
                this.nowTime.month = 0;
            }else{
                this.nowTime.month++;
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
            return day==this.nowTime.day && this.nowTime.month == new Date().getMonth()
        },
        changeDay(day){
            this.dateTime = this.nowTime.year + '-' + (this.nowTime.month + 1)  + '-' + day;
            this.isActive = false;
            this.$emit('input', this.dateTime);
        }
    },
    mounted(){
        document.onclick = ()=>{
            this.isActive = false;
        }
    }
};
</script>