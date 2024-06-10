<script setup lang="ts">
import LayoutItem from '@/components/LayoutItem.vue'

const layoutBoard = [
  { imgName: 'dashboard.svg', label: 'Dashboard' },
  { imgName: 'sales.svg', label: 'Sales' },
  { imgName: 'product.svg', label: 'Products' },
  { imgName: 'customers.svg', label: 'Customers' },
  { imgName: 'orders.svg', label: 'Orders' },
  { imgName: 'transaction.svg', label: 'Transaction' },
  { imgName: 'settings.svg', label: 'Settings' }
]
</script>

<template>
  <div>
    <LayoutItem v-for="(item, indx) in layoutBoard" :key="indx" :item-board="item" />
  </div>
</template>
