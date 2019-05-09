<template>
    <div>
        <div class='x-datepicker'>
            <x-input placeholder="请选择日期" v-model="dateTime" iconBefore="x-icon-watch" autofocus clearable />
            <div class='x-picker'>
                <div class='top'>
                    <span class='x-icon-chevrons-left' @click="prveYear"></span>
                    <span class='x-icon-chevron-left' @click="prveMouth"></span>
                    <span>{{nowTime.year}} 年 {{nowTime.mouth}} 月 {{nowTime.day}}</span>
                    <span class='x-icon-chevron-right' @click="nextMouth"></span>
                    <span class='x-icon-chevrons-right' @click="nextYear"></span>
                </div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'xDatepicker',
    data(){
        return {
            dateTime:'',
            nowTime:this.getNowTime(new Date()),
        }
    },
    methods:{
        getNowTime(date){
            return {
                year:date.getFullYear(),
                mouth:date.getMonth() + 1,
                day:date.getDate(),
                days:date.getDay(),
            }
        },
        prveYear(){
            this.nowTime.year--;
        },
        nextYear(){
            this.nowTime.year++;
        },
        prveMouth(){
            if(this.nowTime.mouth==1){
                this.nowTime.year--;
                this.nowTime.mouth = 12;
            }else{
                this.nowTime.mouth--;
            }
        },
        nextMouth(){
            if(this.nowTime.mouth==12){
                this.nowTime.year++;
                this.nowTime.mouth = 1;
            }else{
                this.nowTime.mouth++;
            }
        },
    },
    mounted(){
        
    }
};
</script>
<style lang="css" scoped>
.x-datepicker {
    width: 220px;
}
</style>