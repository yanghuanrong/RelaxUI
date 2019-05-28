<template>
    <div>
        <div class="topbar">
            <div class="page-title-box">
                <h4 class="page-title">Input 输入框</h4>
                <p class="page-title-decs">通过鼠标或键盘输入内容，是最基础的表单域的包装</p>
            </div>
        </div>
        <RelaxTag name="基本使用">
            <template slot="temp">
                <x-input placeholder="请输入" style="width:300px" /> 
            </template>
            <template slot="desc">
                基本用法，可以使用 v-model 实现数据的双向绑定。 <br/>
                可以直接设置 style 来改变输入框的宽度，默认 100%。
            </template>
            <textarea slot="code">
                <template>
                    <x-input placeholder="请输入" v-model="value" style="width:300px" />
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

        <RelaxTag name="前缀和后缀图标">
            <template slot="temp">
                <x-input placeholder="请输入用户名" iconBefore="x-icon-tv" />
                <br/>
                <x-input placeholder="请输入用户名" iconAfter="x-icon-tv" />
            </template>
            <template slot="desc">
                通过设置 iconBefore 和 iconAfter 设置前缀及后缀图标
            </template>
            <textarea slot="code">
                <template>
                    <x-input placeholder="请输入用户名" iconBefore="x-icon-tv" />
                    <x-input placeholder="请输入用户名" iconAfter="x-icon-tv" />
                </template>
            </textarea>
        </RelaxTag>

        <RelaxTag name="文本域">
            <template slot="temp">
                <x-input placeholder="请输入" type="textarea" rows="7" cols="20" maxlength="40" />
            </template>
            <template slot="desc">
                设置 type 属性为 textarea
            </template>
            <textarea slot="code">
                <template>
                    <x-input placeholder="请输入" type="textarea" rows="7" cols="20" maxlength="40" />
                </template>
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

