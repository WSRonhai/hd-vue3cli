<script setup lang="ts"></script>
<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center box-border p-5">
    <div class=" w-[720px]  bg-white md:grid grid-cols-2 rounded-md shadow-md box-border">
      <div class="p-6  h-[380px] box-border" >
        <h2 class="text-center mt-8">会员登录</h2>
        <hl-input placeholder="请输入用户名/邮箱"></hl-input>
        <hl-input placeholder="请输入用户密码"></hl-input>
        <button
          class="bg-violet-800 w-full text-white py-2 rounded-sm mt-8 hover:bg-violet-600 duration-300"
        >
          登录
        </button>
        <div class="grid grid-flow-col " @click.="">
          <HlLink>网站首页</HlLink>
          <HlLink>会员注册</HlLink>
          <HlLink>找回密码</HlLink>
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
