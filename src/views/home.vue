<script setup lang='ts'>
import {user} from '@/apis/index'
const response = await fetch("http://127.0.0.1:5173/api/info").then((res) =>
  res.json()
);
const res= await user.info()
console.log(res.message);
</script>
<template>
  <div>home index</div>
</template>
<style scoped lang='scss'>
</style>