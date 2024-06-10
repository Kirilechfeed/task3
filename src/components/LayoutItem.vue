<script setup lang="ts">
import { IItemBoard } from '@/src/models/main.ts'

interface Props {
  itemBoard: IItemBoard
}

const props = defineProps<Props>()
</script>

<template>
  {{ props.itemBoard.label }}
</template>
