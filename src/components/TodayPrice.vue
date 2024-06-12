<script setup lang="ts">
interface Props {
  img: string
  price: number
  title: string
}
const props = defineProps<Props>()
const url = `../../../src/assets/today/${props.img}`
const urlImg = new URL(url, import.meta.url).href


</script>

<template>
  <div class="bg-gMidleColor flex items-center justify-center h-[30%] border-t pl-[20px] pr-[70px]">
    <div class="mr-[26px]"><img :src="urlImg" alt="" /></div>
    <div class="flex flex-col text-center">
      <span class="text-xl font-bold text-mLime">${{props.price}}</span>
      <span class="font-light text-[13px] text-mDarkGrey">{{ title }}</span>
    </div>
  </div>
</template>
