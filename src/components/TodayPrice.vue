<script setup lang="ts">
import { ref } from 'vue'
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
  <div class="bg-gMidleColor flex items-center h-[30%] border-t">
    <div class="flex items-center mx-auto">
      <div class="mr-[26px]  flex justify-end">
      <img :src="urlImg" alt="" class="w-[25px] h-[25px]" />
    </div>
    <div class="w-[80px] flex justify-center">
      <div class="flex flex-col text-center">
        <span class="text-xl font-bold text-mLime"
          >${{ props.price % 1 === 0 ? props.price.toString() : props.price.toFixed(2) }}</span
        >
        <span class="font-light text-[13px] text-mDarkGrey">{{ title }}</span>
      </div>
    </div>
    </div>
  </div>
</template>
