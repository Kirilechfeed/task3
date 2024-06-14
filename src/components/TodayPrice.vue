<script setup lang="ts">
import { ref, watch, computed } from 'vue';
interface Props {
  img: string
  price: number
  title: string
}

const props = defineProps<Props>()

const url = `../../../src/assets/today/${props.img}`
const urlImg = new URL(url, import.meta.url).href

const currentCount = ref(props.price);

const formattedCount = computed(() => {
  return currentCount.value.toLocaleString('en-US');
});

watch(
  () => props.price,
  (newCount) => {
    const startValue = currentCount.value;
    const endValue = newCount;
    const duration = 1000; 
    const frameDuration = 1000 / 60;
    const totalFrames = duration / frameDuration;
    let frame = 0;

    function animate() {
      frame++;
      const progress = frame / totalFrames;
      currentCount.value = Math.round(startValue + (endValue - startValue) * progress);
      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  },
  { immediate: true }
);

</script>

<template>
  <div class="bg-gMidleColor flex items-center h-[30%] border-t">
    <div class="flex items-center mx-auto">
      <div class="mr-[26px] flex justify-end">
        <img :src="urlImg" alt="" class="w-[25px] h-[25px]" />
      </div>
      <div class="w-[80px] flex justify-center">
        <div class="flex flex-col text-center">
          <span class="text-xl font-bold text-mLime"
            >${{ formattedCount  }}</span
          >
          <span class="font-light text-[13px] text-mDarkGrey">{{ title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
