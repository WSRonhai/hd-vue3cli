<script setup lang="ts">
import { ref, reactive } from "vue";
import { defineRule, useField, configure, useForm } from "vee-validate";
// import { required, email, min, max } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
// import  * as yup from 'yup'
import v from "@/plugins/validate";
const {yup}=v
// defineRule("required", required);
// defineRule("email", email);
// defineRule("min", min);
// defineRule("max", max);
configure({
  generateMessage: localize("zh_CN", zh_CN),
});

const username1=ref('')
const password1=ref('')
// 1.分开定义规则
// const { errorMessage: usernameError, value: usernameValue } = useField(
//   "username",
//   { required: true, email: true }
// );
// const { errorMessage: passwordrError, value: passwordValue } = useField(
//   "password",
//   { required: true, min: 5, max: 10 }
// );
//2.统一主义规则
const { handleSubmit, errors } = useForm({
  initialValues: {
    username: "",
    password: "",
  },
  validationSchema: {
    username: yup.string().required().email().label('帐号'),
    password:yup.string().required().max(10),
  },
});
const { value: usernameValue } = useField("username", {}, { label: "用户名" });
const { value: passwordValue } = useField("password", {}, { label: "密码" });
const onSubmit = handleSubmit((values) => {
  if(values){
    username1.value=values.username
    password1.value=values.username
  }
  alert("提交成功");
});
</script>
<template>
  <div class="w-screen bg-zinc-200">
    <div class="flex items-center justify-center flex-col h-[600px] pt-30">
      <input
        type="text"
        v-model="usernameValue"
        class="border border-violet-400 mt-10 p-2 rounded-md"
      />
      <p>{{ errors.username }}</p>
      <input
        type="text"
        v-model="passwordValue"
        class="border border-violet-400 mt-10 p-2 rounded-md"
      />
      <p>{{ errors.password }}</p>
      <button @click="onSubmit">提交</button>
    </div>
    <div>{{ username1 }}</div>
    <div>{{ password1 }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
