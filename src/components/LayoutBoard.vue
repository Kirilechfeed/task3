<script setup lang="ts">
import LayoutItem from '@/components/LayoutItem.vue'
import { ref } from 'vue'

const layoutBoard = [
  { imgName: 'dashboard.svg', label: 'Dashboard', path: 'dashboard' },
  { imgName: 'sales.svg', label: 'Sales', path: 'sales' },
  { imgName: 'product.svg', label: 'Products', path: 'products' },
  { imgName: 'customers.svg', label: 'Customers', path: 'customers' },
  { imgName: 'orders.svg', label: 'Orders', path: 'orders' },
  { imgName: 'transaction.svg', label: 'Transaction', path: 'transaction' },
  { imgName: 'settings.svg', label: 'Settings', path: 'settings' }
]
let activeIndex = ref()

function setActive(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <div class="flex flex-col pt-[99px] pl-[26px] h-full last:">
    <LayoutItem
      v-for="(item, indx) in layoutBoard"
      :key="indx"
      :item-board="item"
      :class="activeIndex === indx ? 'text-base text-mBlack' : 'text-sm text-mGrey'"
      @click="setActive(indx)"
    />
  </div>
</template>
