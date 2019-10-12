<style lang="css" scoped>

</style>

<template>
    <div>
        <div class="topbar">
            <div class="page-title-box">
                <h4 class="page-title">Calendar 日历</h4>
                <p class="page-title-decs">按照日历形式展示数据的容器。</p>
            </div>
        </div>
        <RelaxTag name="基础效果">
            <template slot="temp">
                <x-calendar v-model="value">
                    <template v-slot='{date, data}'>
                        <p v-if="data.day === '2019-10-31'" style="color:red">生日</p>
                    </template>
                </x-calendar>
            </template>
            <template slot="desc">
                <p>选择的值：{{value?value:'暂时没有选择日期'}}</p>
            </template>
            <textarea slot="code">
                <template>
                    <x-calendar>
                        <template v-slot='{date, data}'>
                            <p v-if="data.day === '2019-10-31'" style="color:red">生日</p>
                        </template>
                    </x-calendar>
                </template>
                <script>
                    
                </script>
            </textarea>
        </RelaxTag>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:''
        }
    }
}
</script>

