<script setup lang="ts"></script>

<template>
  <div class="bg-gradient-to-r from-gFromColor via-gMidleColor to-gToColor py-5 flex max-w-full">
    <div class="flex justify-between mx-5 w-full">
      <img src="@/assets/logo.svg" alt="#" />
      <div class="flex border-mLigthGrey border rounded-2xl">
        <input type="text" placeholder="Search" class="w-464 rounded-l-2xl pl-2 border-0" />
        <img src="@/assets/search.svg" alt="" class="bg-white rounded-r-2xl cursor-pointer" />
      </div>
      <div class="flex space-x-2.5 items-center">
        <img src="@/assets/ring.svg" alt="" class="w-[27px]" />
        <img src="@/assets/message.svg" alt="" class="w-[30px]" />
        <img src="@/assets/persone.svg" alt="" class="w-[40px] h-[40px]" />
      </div>
    </div>
  </div>
</template>
