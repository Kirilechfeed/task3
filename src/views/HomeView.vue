<script setup lang="ts">
import MenuTop from '@/components/MenuTop.vue'
import LayoutBoard from '@/components/LayoutBoard.vue'
</script>

<template>
  <div class="font-display flex flex-col h-full">
    <MenuTop />
    <div class="flex-1 flex bg-gToColor py-2">
      <div
        class="w-[223px] flex flex-col bg-gradient-to-b from-gFromColor from-10% via-gMidleColor via-30% to-gToColor to-70%"
      >
        <LayoutBoard />
      </div>
      <div class=""></div>
    </div>
  </div>
</template>
