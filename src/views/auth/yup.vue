<script setup lang="ts">
import { ref, reactive } from "vue";
import { defineRule, useField, configure,useForm } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
configure({
  generateMessage: localize("zh_CN", zh_CN),
});
const { handleSubmit}=useForm()
const { errorMessage: usernameError, value: usernameValue } = useField(
  "username",
  { required: true, email: true }
);
const { errorMessage: passwordrError, value: passwordValue } = useField(
  "password",
  { required: true, min: 5, max: 10 }
);
const onSubmit =handleSubmit((values) => {
  console.log(values);
  alert("提交成功");
}) 
</script>
<template>
  <div class="w-screen bg-zinc-200">
    <div class="flex items-center justify-center flex-col h-[600px] pt-30">
      <form>
        <input
          type="text"
          v-model="usernameValue"
          class="border border-violet-400 mt-10 p-2 rounded-md"
        />
        <p>{{ usernameError }}</p>
        <input
          type="text"
          v-model="passwordValue"
          class="border border-violet-400 mt-10 p-2 rounded-md"
        />
        <p>{{ passwordrError }}</p>
        <button @click="onSubmit">提交</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
