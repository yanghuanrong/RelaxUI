<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">x-input 输入框</h4>
        <p class="page-title-decs">通过鼠标或键盘输入内容，是最基础的表单域的包装</p>
      </div>
    </div>
    <div class="card-box">
      <div style="width:200px; margin-bottom:10px">
        <x-input placeholder="请输入用户名" v-model="input" iconBefore="x-icon-search" @input="aa" @focus="as" @blur='br' @keyup.13='wo' autofocus clearable/>
      </div>
      <div style="width:200px; margin-bottom:10px">
        <x-input placeholder="请输入密码" iconBefore="x-icon-unlock" type="password" value="123123" maxlength="10" clearable/>
      </div>
      <div style="width:200px; margin-bottom:10px">
        <x-input placeholder="请输入" iconAfter="x-icon-search" @input="aa"/>
      </div>
      <div style="width:200px; margin-bottom:10px">
        <x-input placeholder="请输入" @input="aa">
          <template slot="addonAfter">
            http://
          </template>
        </x-input>
      </div>
      <div style="width:200px; margin-bottom:10px">
        <x-input placeholder="请输入用户名" value="123" disabled  @input="aa" @change="hhha"/>
      </div>
      <span>{{input}}</span>
      <div style="width:200px; margin-bottom:10px">
        <x-input placeholder="请输入" type="textarea" @input="aa" rows="7" cols="20" maxlength="40" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '123123'
    }
  },
  methods: {
    hhha (e) {
      console.log(e)
    },
    aa (e) {
      console.log(e)
    },
    as () {
      console.log('获得焦点')
    },
    br () {
      console.log('失去焦点')
    },
    wo () {
      alert(this.input)
    },
    fn () {
      console.log(1)
    }
  }
}
</script>
