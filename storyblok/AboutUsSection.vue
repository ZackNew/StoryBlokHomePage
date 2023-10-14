<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div
    class="w-[90%] max-w-[1350px] h-[50rem] object-fit overflow-hidden mx-auto relative"
  >
    <div
      class="bg-white absolute right-10 bottom-0 h-[90%] p-10 rounded-xl max-w-1/2"
    >
      <h3 class="text-[#4761FF] text-xl mb-4">About us</h3>
      <h1 class="text-4xl font-bold mb-8">{{ blok.title }}</h1>
      <p class="font-light mb-8">{{ blok.text }}</p>
      <div class="grid grid-cols-2 mb-8">
        <StoryblokComponent v-for="f in blok.feature" :key="f.u_id" :blok="f" />
      </div>
      <ul>
        <li v-for="act in blok.action">
          <StoryblokComponent :blok="act" />
        </li>
      </ul>
    </div>
    <img v-if="blok.media" :src="blok.media.filename" :alt="blok.media.alt" />
  </div>
</template>
