<script setup lang="ts">
import {env} from '@/types/helper'
console.log(typeof (import.meta.env.VITE_SOME_KEY));
console.log( env.VITE_ROUTE_AUTOLOAD);

</script>
<template>
  <ul>
    <li class="bg">首页</li>
    <li>博文列表</li>
    <li>学习资料</li>
    <li>作者相关</li>
  </ul>
  <router-view />
  
</template>

<style scoped>
</style>
