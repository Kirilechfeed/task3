<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import TodayPrice from '@/components/TodayPrice.vue'
import ItemProduct from '@/components/ItemProduct.vue'

const route = useRoute()
let revenue = ref(1500)
let costs = ref(6000)
let profit = ref(Number(route.query.amount))
let countProduct = ref(0)
const products = ref([])

function getRandomNumber() {
  const randomNum = Math.random() * 100
  const roundedNum = randomNum.toFixed(2)
  return parseFloat(roundedNum)
}

function recalculationPrice() {
  revenue.value += products.value[0].marketPrice
  costs.value += products.value[0].wholesalePrice
  profit.value += products.value[0].marketPrice - products.value[0].wholesalePrice
}

// setInterval(() => {
//   const newItem = {
//     img: 'imgProduct.png',
//     name: 'Product Name - Choose Name',
//     marketPrice: getRandomNumber()
//   }
//   newItem.wholesalePrice = Number(((newItem.marketPrice / 100) * 60).toFixed(2))
//   newItem.profit = Number((newItem.marketPrice - newItem.wholesalePrice).toFixed(2))
//   products.value.unshift(newItem)
//   countProduct.value = products.value.length
//   recalculationPrice()
// }, 3000)
</script>

<template>
  <div class="flex flex-col p-5 h-full">
    <h1 class="pb-5 text-xl font-semibold">Dashboard</h1>
    <div class="bg-mWhite h-[470px] rounded-lg p-5 my-2 flex">
      <div class="shadow-3xl rounded bg-gMidleColor w-[20%]">
        <h2 class="text-xs font-semibold mt-3 mb-2 pl-2">Today’s Metrics</h2>
        <div class="h-full">
          <TodayPrice :img="'1.svg'" :title="'Revenue'" :price="revenue" :class="'pt-6'" />
          <TodayPrice :img="'2.svg'" :title="'Costs'" :price="costs" />
          <TodayPrice :img="'3.svg'" :title="'Profit'" :price="profit" />
        </div>
      </div>
      <div class="shadow-3xl rounded bg-gMidleColor mx-4 max-h-full w-[60%] overflow-auto">
        <div class="flex justify-between items-center">
          <h2 class="text-xs font-semibold mt-3 mb-2 pl-2">Recent Orders</h2>
          <span
            class="font-medium w-[30px] mr-2 flex justify-center text-center text-[10px] text-mWhite bg-gradient-to-r from-gButtonFrom to-gButtonTo shadow-2xl py-1 rounded-[10px]"
            >{{ countProduct }}</span
          >
        </div>

        <div class="p-2 border-t bt-mDarkGrey flex flex-col pb-[40px]">
          <div class="flex justify-between border-b bt-mDarkGrey pb-2">
            <h3 class="text-[10px] text-mDarkGrey">Product Name</h3>
            <div class="flex">
              <h3 class="text-[10px] text-mDarkGrey w-28 text-center">Market Price</h3>
              <h3 class="text-[10px] text-mDarkGrey w-28 text-center">Wholesale Price</h3>
              <h3 class="text-[10px] text-mDarkGrey w-28 text-center">Profit</h3>
            </div>
          </div>
          <div class="max-h-full">
            <div v-for="(itemProduct, index) in products" :key="index">
              <ItemProduct :item-product="itemProduct" />
            </div>
          </div>
        </div>
      </div>
      <div class="shadow-3xl rounded w-[20%] bg-gMidleColor">
        <h2 class="text-xs font-semibold mt-3 mb-2 pl-2">Sales Target</h2>
        <div class="p-2 border-t bt-mDarkGrey flex flex-col items-center pb-[40px]">
          <div class="relative h-[200px] w-[200px] mt-[78px]">
            <div class="relative w-full h-full">
              <svg class="w-full h-full rotate-[-90deg]" viewBox="25 25 50 50">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color: #7debb8; stop-opacity: 1" />
                    <stop offset="100%" style="stop-color: #61e199; stop-opacity: 1" />
                  </linearGradient>
                </defs>

                <circle
                  class="fill-none stroke-[#E6E6E6BF] stroke-[4]"
                  cx="50"
                  cy="50"
                  r="20"
                ></circle>
                <circle
                  class="fill-none stroke-[url(#gradient)] stroke-[7]"
                  stroke-dasharray="126"
                  stroke-dashoffset="31.5"
                  stroke-linecap="round"
                  cx="50"
                  cy="50"
                  r="20"
                ></circle>
              </svg>
              <div
                class="absolute w-[130px] h-[130px] bg-white rounded-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col text-center justify-center align-center"
              >
                <span class="font-medium text-[24px] text-mBlack">75%</span>
                <span class="font-medium text-[10px] text-mGrey">Transaction</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col text-center">
            <span class="font-medium text-[20px] mt-7">Monthly Sale Target</span>
            <span class="font-medium text-[20px]">${{ route.query.target }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[470px] my-2 flex">
      <div class="bg-mWhite w-[70%] rounded-lg p-5 mr-4">
        <div class="w-full shadow-3xl rounded-lg bg-gMidleColor h-full">
          <div class="flex justify-between items-center">
            <h2 class="text-xs font-semibold mt-3 mb-2 pl-2">Monthly Growth</h2>
          </div>
          <div class="p-2 border-t bt-mDarkGrey flex flex-col items-center pb-[40px]"></div>
        </div>
      </div>
      <div class="bg-mWhite w-[30%] rounded-lg p-5">
        <div class="w-full shadow-3xl rounded-lg bg-gMidleColor h-full">
          <div class="flex justify-between items-center">
            <h2 class="text-xs font-semibold mt-3 mb-2 pl-2">Top Selling Products</h2>
          </div>
          <div class="p-2 border-t bt-mDarkGrey flex flex-col items-center pb-[40px]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
