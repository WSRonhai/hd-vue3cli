<script setup lang="ts">
import { user } from "@/apis/";
const response = await user.info();
console.log(response.data.name);
</script>
<template>
  <div>home index</div>
  <div>{{ response }}</div>
</template>
<style scoped lang="scss"></style>
