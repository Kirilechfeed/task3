<script setup lang="ts">


interface Props {
  label: string
}
const props = defineProps<Props>()

</script>

<template>
  <div class="flex ">
    <div class="pt-8 pl-2 pr-7 w-[120px]" >
        <h3 class="text-[10px] font-medium text-mDarkGrey pt-5">{{props.label}}</h3>
    </div>
    <div class="flex flex-col text-center">
        <div class="border-[4px] border-gButtonFrom rounded-lg mt-10 flex flex-col text-center px-[60px] py-[8px]">
             <span class="font-medium text-[30px]">65%</span>
             <span class="font-medium text-[9px] text-mGrey">Growth</span>
        </div>
        <span class="font-medium text-[10px] text-mDarkBlue mt-2">Goal: 20%</span>
    </div>
    
  </div>
</template>
