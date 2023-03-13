<script setup lang="ts">
import { ref, reactive } from "vue";
import { Form, Field,defineRule,configure } from "vee-validate";
import {required,email,min} from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';

const account = ref("");
// const emailRules = (value) => {
//   console.log("emailRules", value);

//   return /@/.test(value) ? true : "邮箱格式错误";
// };
const submit = (values) => {
  console.log(values);
  alert("提交成功");
};

configure({
    generateMessage:localize('zh_CN',zh_CN)
})
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
</script>
<template>
  <!-- 1.基本用法 -->
  <!-- <Form
    class="w-screen h-screen flex justify-center items-center pt-80 mx-auto bg-slate-300"
    :validate-on-input="true"
  >
      <Field name="account" :rules="emailRules" class="w-80 p-6 block" />
      <ErrorMessage name="account" class="block"/>
    
      <button @click="submit" class="block">提交</button>
    
  </Form> -->
  <!-- 2.插槽用法 -->
  <!-- <Form @submit="submit">
    <Field name="account" :rules="emailRules" :validate-on-input="true" #default="{field,errorMessage}">
        <input  v-model="account" v-bind="field">
        <p class="h-16 bg-red-400 text-white" v-if="errorMessage">{{ errorMessage }}</p>
        <hr />
        <button  class="mt-20 p-5 bg-slate-700 text-white">提交表单</button>
    </Field>
  </Form> -->
  <!-- 3.使用组件的验证规则 -->
  <Form @submit="submit">
    <Field name="account"  :rules="{required:true,email:true}" label="帐号" :validate-on-input="true" v-slot="{field,errorMessage}">
        <input v-bind="field" type="text" v-model="account" class=" border-4">
        <p class="bg-red-400 text-white" >{{ errorMessage }}</p>
    </Field>
    <button  class="mt-20 p-5 bg-slate-700 text-white">提交表单</button>
  </Form>
</template>

<style scoped lang="scss"></style>
