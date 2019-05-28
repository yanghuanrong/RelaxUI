<template>
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Form 表单</h4>
        <p class="page-title-decs">具有数据收集、校验和提交功能的表单</p>
      </div>
    </div>
    <RelaxTag name="基本使用">
      <template slot="temp">
        <x-form :model="formValidate" :rules="ruleValidate">
          <x-form-item label="Name" prop="name">
            <x-input placeholder="Enter your name" v-model="formValidate.name"/>
          </x-form-item>
        </x-form>
      </template>
      <template slot="desc"></template>
      <textarea slot="code"></textarea>
    </RelaxTag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change"
          }
        ],
        gender: [
          { required: true, message: "Please select gender", trigger: "change" }
        ],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change"
          },
          {
            type: "array",
            max: 2,
            message: "Choose two hobbies at best",
            trigger: "change"
          }
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change"
          }
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please enter a personal introduction",
            trigger: "blur"
          },
          {
            type: "string",
            min: 20,
            message: "Introduce no less than 20 words",
            trigger: "blur"
          }
        ]
      }
    };
  }
};
</script>

