<script setup lang="ts">
import { ref, reactive } from "vue";
import v from "@/plugins/validate";
const account=ref('')
const { Field, Form } = v;
const onSubmit = (values) => {
  console.log(values);
  alert("提交成功");
};
</script>
<template>
  <Form @submit="onSubmit">
    <Field
      name="account"
      :rules="{ required: true, email: true }"
      :validate-on-input="true"
      v-slot="{ field, errorMessage }"
    >
      <input type="text" v-bind="field" />
      <hr />
      <p>{{ errorMessage }}</p>
    </Field>
	<button>提交</button>
  </Form>
</template>

<style scoped lang="scss"></style>
