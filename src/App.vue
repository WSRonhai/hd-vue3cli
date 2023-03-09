<script setup lang="ts">
import {user} from '@/apis/index'
const response = await fetch("http://127.0.0.1:5173/api/info").then((res) =>
  res.json()
);
const res= await user.info()
console.log(res.message);

</script>
<template> 
  <div>
    <Suspense>
      <template #default>
        <ul>
          <li class="bg-slate-400">首页</li>
          <li>博文列表</li>
          <li>学习资料</li>
          <li>作者相关</li>
        </ul>
        <router-view />
      </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
