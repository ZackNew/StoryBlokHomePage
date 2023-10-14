<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="w-[90%] max-w-[1300px] mx-auto m-20">
    <h3 class="text-[#4761FF] text-xl mb-4 text-center">Our Services</h3>
    <h1 class="text-4xl font-bold mb-8 text-center">{{ blok.title }}</h1>
    <div class="grid grid-cols-3 gap-10">
      <StoryblokComponent v-for="f in blok.feature" :key="f.u_id" :blok="f" />
    </div>
  </div>
</template>
