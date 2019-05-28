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
                <x-datepicker
                    placeholder='选择日期'
                    v-model="value"
                />
            </template>
            <template slot="desc">
                <p>选择的值：{{value?value:'暂时没有选择日期'}}</p>
            </template>
            <textarea slot="code">
                <template>
                    <x-datepicker placeholder='选择日期' v-model="value"/>
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

