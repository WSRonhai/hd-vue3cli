<template>
  <h3>admin user</h3>
  <router-view />
</template>

<script setup lang="ts"></script>
<style scoped lang="scss"></style>

<script>
//自定义路由规则
export default {
  route: { path: "/user" },
};
</script>
