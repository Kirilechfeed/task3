<script setup lang="ts">

export interface ITopItem{
  img: string
  name: string
  price:number
}

interface Props {
  topItem: ITopItem
}
const props = defineProps<Props>()
const url = `../../../src/assets/layout/${props.topItem.img}`
const urlImg = new URL(url, import.meta.url).href
</script>

<template>
  <div class="flex mt-3.5 items-center">
    <div class="flex items-center">
      <img :src="urlImg" alt="" class="w-[60px] h-60px" />
    </div>
    <div class="flex flex-col pl-4">
      <div class="h-4 flex items-center">
        <span class="font-medium text-[10px]">{{ props.topItem.name }}</span>
      </div>
      <div class="h-4 flex items-center">
        <img src="@/assets/reting.svg" alt="" />
      </div>
      <div class="h-4 flex items-center">
        <span class="font-medium text-[10px]">${{ props.topItem.price }}</span>
      </div>
    </div>
  </div>
</template>
