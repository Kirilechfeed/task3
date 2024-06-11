<script setup lang="ts">
import { IItemBoard } from '@/src/models/main.ts'
import { computed }from "vue"
interface Props {
  itemBoard: IItemBoard
}
const props = defineProps<Props>()

const url = `../../../src/assets/layout/${props.itemBoard.imgName}`
const urlImg = new URL(url, import.meta.url).href
if(props.itemBoard.imgName == 'setting.svg'){

}
</script>

<template>
  <div :class="props.itemBoard.imgName !== 'settings.svg' ? 'flex items-center' : 'flex items-center self-end'"><img :src="urlImg" alt="" class="w-7 h-7 mr-2">{{ props.itemBoard.label }}</div>
</template>
