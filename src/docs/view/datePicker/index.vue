<style lang="css" scoped>

</style>

<template>
    <div>
        <div class="topbar">
            <div class="page-title-box">
                <h4 class="page-title">DatePicer 日期选择器</h4>
                <p class="page-title-decs">用于选择一个日期</p>
            </div>
        </div>
        <RelaxTag name="基础效果">
            <template slot="temp">
                <x-datepicker></x-datepicker>
            </template>
            <template slot="desc">
                基础效果
            </template>
            <textarea slot="code">
                <template>
                    <x-datepicker />
                </template>
            </textarea>
        </RelaxTag>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

