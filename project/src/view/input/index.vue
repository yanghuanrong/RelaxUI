<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Input 输入框</h4>
        <p class="page-title-decs">通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
      </div>
    </div>
    <div class="card-box">
      <div style="width:200px; margin-bottom:10px">
        <Input placeholder="请输入用户名" v-model="input" @input="aa" @focus="as" @blur='br' @keyup.13='wo' autofocus clearable/>
      </div>
      <div style="width:200px; margin-bottom:10px">
        <Input placeholder="请输入" size="lg" @input="aa"/>
      </div>
      <div style="width:200px;">
        <Input placeholder="请输入用户名" @input="aa" @change="hhha" clearable/>
      </div>
      <span>{{input}}</span>
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
    }
  }
}
</script>
