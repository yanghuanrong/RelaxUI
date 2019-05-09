<style lang="css" scoped>
.x-datepicker {
    width: 220px;
    position: relative;
}
.x-picker {
    width: 280px;
    padding: 15px;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 5px;
    position: absolute;
    top:50px;
    left: 0;
    background: #fff;
    z-index: 999;
}
.x-picker_header {
    text-align: center;
}
.x-picker_week {
    width: 100%;
}
.x-picker_week li{
    float: left;
    width: calc(100% / 7);
    list-style: none;
    text-align: center; 
}
.x-btn-prve{
    float: left;
    font-size: 20px;
}
.x-btn-next{
    float: right;
    font-size: 20px;
}
.x-clearfix:after{
    content: '';
    display: block;
    clear: both;
}
.x-picker_arrow{
    position: absolute;
    top: 0px;  
    border-style:solid;
    border-color:transparent transparent #e4e7ed;
    border-width: 7px;
    border-top-width: 0px;
    margin-top: -7px;
    left: 35px;
}
.x-picker_arrow::after{
    position: absolute;
    top: 1px;
    content: '';
    display: block;
    width:0px; 
    height:0px; 
    font-size:0px; 
    line-height:0px;
    border-width:6px; 
    border-style:solid;
    border-color:transparent transparent #fff;
    border-top-width: 0px;
    margin-left: -6px;
}
</style>
<template>
    <div>
        <div class='x-datepicker'>
            <x-input placeholder="请选择日期" v-model="dateTime" iconBefore="x-icon-watch" autofocus clearable />
            <div class='x-picker'>
                <div class='x-picker_header x-clearfix'>
                    <span class='x-icon-chevrons-left x-btn-prve' @click="prveYear"></span>
                    <span class='x-icon-chevron-left x-btn-prve' @click="prveMouth"></span>
                    <span>{{nowTime.year}} 年 {{nowTime.mouth}} 月</span>
                    <span class='x-icon-chevron-right x-btn-next' @click="nextMouth"></span>
                    <span class='x-icon-chevrons-right x-btn-next' @click="nextYear"></span>
                </div>
                <ul class='x-picker_week x-clearfix'>
                    <li v-for="(week,index) in 7" :key="week">{{backWeek(index)}}</li> 
                </ul>
                <div class='x-picker_arrow'></div>
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
    computed:{
        
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
        backWeek(index){
            console.log(index);
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