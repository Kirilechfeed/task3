<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'

import TodayPrice from '@/components/TodayPrice.vue'
import ItemProduct from '@/components/ItemProduct.vue'
import AboutCrowth from '@/components/AboutCrowth.vue'
import TopProducts from '@/components/TopProducts.vue'

interface IItemProduct {
  img: string;
  name: string;
  marketPrice: number;
  newlyAdded: boolean,
  wholesalePrice?: number;
  profit?: number;
}

const route = useRoute()
let revenue = ref(1500)
let costs = ref(6000)
let profit = ref(Number(route.query.amount))
let countProduct = ref(0)

const products = ref<IItemProduct[]>([]);
const topProducts = ref([
  { img: 'product2.png', name: 'Product Name - Choose Name', rating: 5, price: 90 },
  { img: 'product2.png', name: 'Product Name - Choose Name', rating: 5, price: 90 },
  { img: 'product2.png', name: 'Product Name - Choose Name', rating: 5, price: 90 },
  { img: 'product2.png', name: 'Product Name - Choose Name', rating: 5, price: 90 },
  { img: 'product2.png', name: 'Product Name - Choose Name', rating: 5, price: 90 },
  { img: 'product2.png', name: 'Product Name - Choose Name', rating: 5, price: 90 },
  { img: 'product2.png', name: 'Product Name - Choose Name', rating: 5, price: 90 },
  { img: 'product2.png', name: 'Product Name - Choose Name', rating: 5, price: 90 }
])

function getRandomNumber() {
  const randomNum = Math.random() * 100
  const roundedNum = randomNum.toFixed(2)
  return parseFloat(roundedNum)
}

function recalculationPrice() {
  revenue.value += products.value[0].marketPrice
  costs.value += products.value[0].wholesalePrice ?? 0
  profit.value += products.value[0].marketPrice - (products.value[0].wholesalePrice ?? 0)
}

setInterval(() => {
  const newItem: IItemProduct = {
    img: 'imgProduct.png',
    newlyAdded: true,
    name: 'Product Name - Choose Name',
    marketPrice: getRandomNumber()
  }
  newItem.wholesalePrice = Number(((newItem.marketPrice / 100) * 60).toFixed(2))
  newItem.profit = Number((newItem.marketPrice - newItem.wholesalePrice).toFixed(2))
  products.value.unshift(newItem)
  countProduct.value = products.value.length
  recalculationPrice()
}, 3000)
</script>

<template>
  <div class="flex flex-col p-5 h-full">
    <h1 class="pb-5 text-xl font-semibold">Dashboard</h1>
    <div class="bg-mWhite h-[470px] rounded-lg p-5 my-2 flex">
      <div class="shadow-3xl rounded bg-gMidleColor w-[20%]">
        <h2 class="text-xs font-semibold mt-3 mb-2 pl-2">Today’s Metrics</h2>
        <div class="h-full">
          <TodayPrice :img="'1.svg'" :title="'Revenue'" :price="revenue"  :class="'pt-6'" />
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
          <transition-group>
            <div class="max-h-full">
             <div v-for="(itemProduct, index) in products" :key="index" class="transition-show" :class="{'translate-y-[-100%] opacity-0 bg-mLime':itemProduct.newlyAdded}" 
               @transitionend="itemProduct.newlyAdded = false">
               <ItemProduct :item-product="itemProduct" />
             </div>
            </div>
          </transition-group>
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
                  class="fill-none stroke-[url(#gradient)] stroke-[6]"
                  stroke-dasharray="126"
                  stroke-dashoffset="31.5"
                  stroke-linecap="round"
                  cx="50"
                  cy="50"
                  r="20"
                ></circle>
              </svg>
              <div
                class="absolute w-[135px] h-[135px] bg-gMidleColor rounded-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col text-center justify-center align-center"
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
            <div class="flex items-center space-x-4">
              <div
                class="font-light text-[12px] cursor-pointer bg-[#F0F0F0] py-2 px-5 text-mDarkGrey underline underline-offset-4 decoration-mLigthGrey"
              >
                April - June
              </div>
              <div><img src="@/assets/menu.svg" alt="" class="mr-4 cursor-pointer" /></div>
            </div>
          </div>
          <div class="p-2 border-t bt-mDarkGrey flex h-full pb-[40px]">
            <div class="border-r mt-5 flex flex-col w-[50%]">
              <div class="h-[50%] border-b flex justify-center">
                <AboutCrowth :label="'Current Month'" />
              </div>
              <div class="h-[50%] flex justify-center">
                <AboutCrowth :label="'Quarterly'" />
              </div>
            </div>
            <div class="w-[50%] flex justify-center relative items-center">
              <div class="z-50 w-[120px] absolute z-50 top-0 right-0 flex">
                <div class="flex items-center mr-3">
                  <span class="h-[16px] w-[16px] rounded bg-mDarkBlue"></span
                  ><span class="font-light text-[10px] ml-1">Goal</span>
                </div>
                <div class="flex items-center">
                  <span class="h-[16px] w-[16px] rounded bg-mLime"></span
                  ><span class="font-light text-[10px] ml-1">Growth</span>
                </div>
              </div>
              <div class="relative h-[70%] w-full pl-[50px] mr-[70px]">
                <div class="absolute w-full h-full z-10">
                  <div class="border-t absolute w-full bottom-[0%] z-1">
                    <span class="absolute left-[-40px] top-[-10px] text-xs text-gray-700">0%</span>
                  </div>
                  <div class="border-t absolute w-full bottom-[20%]">
                    <span class="absolute left-[-40px] top-[-10px] text-xs text-gray-700">20%</span>
                  </div>
                  <div class="border-t absolute w-full bottom-[40%]">
                    <span class="absolute left-[-40px] top-[-10px] text-xs text-gray-700">40%</span>
                  </div>
                  <div class="border-t absolute w-full bottom-[60%]">
                    <span class="absolute left-[-40px] top-[-10px] text-xs text-gray-700">60%</span>
                  </div>
                  <div class="border-t absolute w-full bottom-[80%]">
                    <span class="absolute left-[-40px] top-[-10px] text-xs text-gray-700">80%</span>
                  </div>
                  <div class="border-t absolute w-full bottom-[100%]">
                    <span class="absolute left-[-40px] top-[-10px] text-xs text-gray-700"
                      >100%</span
                    >
                  </div>
                </div>
                <div class="flex justify-between items-end mt-[20px] h-full relative z-50">
                  <div class="flex flex-col items-center">
                    <div
                      class="bg-gradient-to-r from-gButtonFrom to-gButtonTo w-5 h-[105px] rounded-tl-3xl rounded-tr-3xl"
                    ></div>
                    <div class="bg-mDarkBlue w-5 h-[45px]"></div>
                    <span class="mt-2 text-sm text-gray-700">April</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div
                      class="bg-gradient-to-r from-gButtonFrom to-gButtonTo w-5 h-[85px] rounded-tl-3xl rounded-tr-3xl"
                    ></div>
                    <div class="bg-mDarkBlue w-5 h-[55px]"></div>
                    <span class="mt-2 text-sm text-gray-700">May</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div
                      class="bg-gradient-to-r from-gButtonFrom to-gButtonTo w-5 h-[115px] rounded-tl-3xl rounded-tr-3xl"
                    ></div>
                    <div class="bg-mDarkBlue w-5 h-[45px]"></div>
                    <span class="mt-2 text-sm text-gray-700">June</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-mWhite w-[30%] rounded-lg p-5">
        <div class="w-full shadow-3xl rounded-lg bg-gMidleColor h-full">
          <div class="flex justify-between items-center">
            <h2 class="text-xs font-semibold mt-3 mb-2 pl-2">Top Selling Products</h2>
            <p class="text-[8px] text-[#999999] mr-2">View All</p>
          </div>
          <div class="p-2 border-t bt-mDarkGrey h-full flex flex-col items-center pb-[40px]">
            <div
              class="overflow-y-auto w-full h-full scrollbar overflow-y-scroll no-scrollbar-arrows"
            >
              <TopProducts
                v-for="(topItem, index) in topProducts"
                :key="index"
                :topItem="topItem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
