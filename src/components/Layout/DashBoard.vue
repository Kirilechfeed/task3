<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'
  import TodayPrice from '@/components/TodayPrice.vue'
  import ItemProduct from '@/components/ItemProduct.vue'


  const route = useRoute()
  let revenue = ref(0)
  let costs = ref(0)
  let profit = ref(Number(route.query.amount))

  const products = ref([]) 
  function recalculationPrice(){
    revenue.value += products.value[0].marketPrice
    costs.value += products.value[0].wholesalePrice
    profit.value += products.value[0].marketPrice - products.value[0].wholesalePrice
    console.log(profit.value)
  }
  // let getInterval = setInterval(()=>{
  //   products.value.unshift({img: 'imgProduct.png', name: 'Product Name - Choose Name', marketPrice: 15, wholesalePrice:8, profit:15-8})
  //   recalculationPrice()
  // },3000)
</script>

<template>
  <div class="flex flex-col p-5 h-full">
    <h1 class="pb-5 text-xl font-semibold">Dashboard</h1>
    <div class="bg-mWhite h-[420px] rounded-lg p-5 my-2 flex">
      <div class="shadow-md rounded bg-gMidleColor">
        <h2 class="text-xs font-semibold mt-3 mb-2 pl-2">Today’s Metrics</h2>
        <div class="h-full">
          <TodayPrice :img="'1.svg'" :title="'Revenue'"  :price="revenue" :class="'pt-6'" />
          <TodayPrice :img="'2.svg'" :title="'Costs'" :price="costs"/>
          <TodayPrice :img="'3.svg'" :title="'Profit'" :price="profit"/>
        </div>
      </div>
      <div class="shadow-md bg-gMidleColor max-h-full overflow-auto">
        <h2 class="text-xs font-semibold mt-3 mb-2 pl-2">Recent Orders</h2>
        <div class="p-2 border-t bt-mDarkGrey flex flex-col   pb-[40px]">
          <div class="flex  border-b bt-mDarkGrey pb-2">
             <h3 class="text-[10px] text-mDarkGrey w-80">Product Name</h3>
              <div class="flex">
                <h3 class="text-[10px] text-mDarkGrey w-28 text-center">Market Price</h3>
                <h3 class="text-[10px] text-mDarkGrey w-28 text-center">Wholesale Price</h3>
                <h3 class="text-[10px] text-mDarkGrey w-28 text-center">Profit</h3>
              </div>
          </div>
          <div class="max-h-full ">
            <div v-for="(itemProduct, index) in products" :key="index">
               <ItemProduct :item-product="itemProduct"/>
            </div>
          </div>
         
        </div>
      </div>
      <div class="shadow-md"></div>
    </div>
    <div class="bg-mWhite h-[420px] rounded-lg p-5 my-2"></div>
  </div>
</template>
