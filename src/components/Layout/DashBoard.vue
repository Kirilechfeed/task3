<script setup lang="ts">
import { useRoute } from 'vue-router'
import TodayPrice from '@/components/TodayPrice.vue'
const route = useRoute()
console.log(route.query)
</script>

<template>
  <div class="flex flex-col p-5 h-full">
    <h1 class="pb-5 text-xl font-semibold">Dashboard</h1>
    <div class="bg-mWhite h-[420px] rounded-lg p-5 my-2 flex">
      <div class="shadow-md rounded bg-gMidleColor">
        <h2 class="text-xs font-semibold mt-3 mb-2 pl-2">Today’s Metrics</h2>
        <div class="h-full">
          <TodayPrice :img="'1.svg'" :class="'pt-6'" />
          <TodayPrice :img="'2.svg'" />
          <TodayPrice :img="'3.svg'" />
        </div>
      </div>
      <div class="shadow-md"></div>
      <div class="shadow-md"></div>
    </div>
    <div class="bg-mWhite h-[420px] rounded-lg p-5 my-2"></div>
  </div>
</template>
