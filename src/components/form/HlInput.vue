<script setup lang='ts'>
</script>
<template>
  <input type="text" placeholder="" class="thl-input" />
</template>

<style scoped lang='scss'>
.thl-input {
  @apply px-2 w-full mt-5 py-2 rounded-sm overflow-hidden border-2 border-gray-200 border-r-2 placeholder:text-xs focus:right-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white text-sm;
}
</style>