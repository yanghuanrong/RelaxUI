<template>
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Form 表单</h4>
        <p class="page-title-decs">具有数据收集、校验和提交功能的表单</p>
      </div>
    </div>
    <RelaxTag name="表单验证">
      <template slot="temp">
        <x-form :model="formValidate" :rules="ruleValidate" ref="formValidate">
          <x-form-item label="Name" prop="name">
            <x-input placeholder="请输入用户名" v-model="formValidate.name"/>
          </x-form-item>
          <x-form-item label="E-mail" prop="mail">
            <x-input placeholder="请输入邮箱" v-model="formValidate.mail"/>
          </x-form-item>
          <x-form-item>
            <x-button type="primary" @click="handleSubmit('formValidate')">Submit</x-button>
            <x-button @click="handleReset('formValidate')" style="margin-left:10px;">Reset</x-button>
          </x-form-item>
        </x-form>
      </template>
      <template slot="desc">
        x-form 组件基于  async-validator 实现的数据验证，给 x-form 设置属性 rules，同时给需要验证的 x-form-item 设置属性 prop 指向对应字段即可。 <br/>
        验证方法也支持 Promise。
      </template>
      <textarea slot="code">
<template slot="temp">
  <x-form :model="formValidate" :rules="ruleValidate" ref="formValidate">
    <x-form-item label="Name" prop="name">
      <x-input placeholder="请输入用户名" v-model="formValidate.name"/>
    </x-form-item>
    <x-form-item label="E-mail" prop="mail">
      <x-input placeholder="请输入邮箱" v-model="formValidate.mail"/>
    </x-form-item>
    <x-form-item>
      <x-button type='primary' @click="handleSubmit('formValidate')">Submit</x-button>
      <x-button @click="handleReset('formValidate')" style="margin-left:10px;">Reset</x-button>
    </x-form-item>
  </x-form>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        name: "",
        mail: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$message.success("验证成功!");
        } else {
          this.$message.error("验证不通过!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

      </textarea>
    </RelaxTag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValidate: {
        name: "",
        mail: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$message.success("验证成功!");
        } else {
          this.$message.error("验证不通过!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

