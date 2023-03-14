<script setup lang="ts">
import { ref, reactive } from "vue";

import v from "@/plugins/validate";
const {yup,Field,Form,useForm,useField}=v
const { handleSubmit, errors } = useForm({
  initialValues: {
    username: "",
    password: "",
  },
  validationSchema: {
    username: yup.string().required().email().label('帐号'),
    password:yup.string().required().max(10).min(5).label('密码'),
  },
});
const { value: usernameValue } = useField("username", {}, { label: "用户名" });
const { value: passwordValue } = useField("password", {}, { label: "密码" });
const onSubmit = handleSubmit((values) => {
  console.log(values);
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

  </div>
</template>

<style scoped lang="scss"></style>
