<script setup lang="ts">
import { IItemProduct } from '@/src/models/main.ts'

interface Props {
  itemProduct: IItemProduct
}
const props = defineProps<Props>()
const url = `../../../src/assets/${props.itemProduct.img}`
const urlImg = new URL(url, import.meta.url).href
</script>

<template>
  <div class="flex mt-3.5 items-center justify-between">
    <div class="flex items-center w-80">
      <img :src="urlImg" alt="" class="pr-5" />
      <div>
        <span class="font-medium text-[10px]">{{ props.itemProduct.name }}</span>
      </div>
    </div>
    <div class="flex items-center">
      <div class="w-28 text-center">
        <span class="font-medium text-[10px]">${{ props.itemProduct.marketPrice }}</span>
      </div>
      <div class="w-28 text-center">
        <span class="font-medium text-[10px]">${{ props.itemProduct.wholesalePrice }}</span>
      </div>
      <div class="w-28 flex justify-center">
        <span
          class="font-medium w-[60px] block text-center text-[10px] text-mWhite bg-gradient-to-r from-gButtonFrom to-gButtonTo shadow-2xl rounded-[10px] py-2"
          >${{ props.itemProduct.profit }}</span
        >
      </div>
    </div>
  </div>
</template>
