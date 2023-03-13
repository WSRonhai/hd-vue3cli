<script setup lang="ts">
import { Field, Form, ErrorMessage } from "vee-validate";
function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return 'This is required';
}
</script>
<template>
  <div
    class="bg-slate-300 h-screen flex justify-center items-center box-border p-5"
  >
    <div
      class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md box-border"
    >
      <div class="p-6 h-[380px] box-border">
        <h2 class="text-center mt-8">会员登录</h2>
        <Form v-slot="{errors}">
          <Field name="field" :rules="isRequired" class="hl-input"/>
          <ErrorMessage name="field" >
            <div class=" text-orange-700 text-xs leading-8">{{errors.field}}</div>
            </ErrorMessage>
        </Form>
        <!-- <input type="text" class="hl-input mt-5" placeholder="请输入用户名/邮箱">
        <div class=" text-orange-700 text-xs leading-8">用户名/邮箱错误</div>
        <input type="text" class="hl-input" placeholder="请输入用户密码">
        <div class=" text-orange-700 text-xs leading-8">密码错误</div> -->
        <button
          class="bg-violet-800 w-full text-white mt-4 py-2 rounded-sm hover:bg-violet-600 duration-300"
        >
          登录
        </button>
        <div class="grid grid-flow-col">
          <router-link to="/" class="hl-a mt-5">网站首页</router-link>
          <a href="" class="hl-a mt-5">会员注册</a>
          <a href="" class="hl-a mt-5">找回密码</a>
        </div>
      </div>
      <div>
        <img
          src="@/assets/images/login.jpg"
          alt=""
          class="w-full rounded-r-sm object-cover h-96 hidden md:block"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.thl-input {
  @apply px-2 w-full mt-5 py-2 rounded-sm overflow-hidden border-2 border-gray-200 border-r-2 placeholder:text-xs focus:right-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white text-sm;
}
</style>
