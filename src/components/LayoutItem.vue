<script setup lang="ts">
import { IItemBoard } from '@/src/models/main.ts'
// import { Router } from 'vue-router'
interface Props {
  itemBoard: IItemBoard
}
const props = defineProps<Props>()

const url = `../../../src/assets/layout/${props.itemBoard.imgName}`
const urlImg = new URL(url, import.meta.url).href
</script>

<template>
  <div
    @click="$router.push({ path: `/${itemBoard.path}`, query: { amount: 15000, target: 25000 } })"
    :class="
      props.itemBoard.imgName !== 'settings.svg'
        ? 'mb-8'
        : ' flex-1 flex mb-10 flex-col justify-end'
    "
    class="cursor-pointer"
  >
    <div class="flex items-center hover:text-base text-mBlack">
      <img :src="urlImg" alt="" class="w-7 h-7 mr-2" />{{ props.itemBoard.label }}
    </div>
  </div>
</template>
