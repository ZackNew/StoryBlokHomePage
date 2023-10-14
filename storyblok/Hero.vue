<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div>
    <div class="relative">
      <div class="absolute top-[30%] left-[15%]">
        <p class="text-white text-2xl mb-8">{{ blok.title }}</p>
        <h2 class="text-white text-7xl font-bold max-w-[70%] mb-5">
          {{ blok.slogan }}
        </h2>
        <ul>
          <li v-for="act in blok.action">
            <StoryblokComponent :blok="act" />
          </li>
        </ul>
      </div>
      <img v-if="blok.media" :src="blok.media.filename" :alt="blok.media.alt" />
    </div>
  </div>
</template>
