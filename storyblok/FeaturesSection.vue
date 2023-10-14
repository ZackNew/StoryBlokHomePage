<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="m-20 w-[90%] max-w-[1300px] mx-auto">
    <h1 class="mb-10 text-3xl font-bold">{{ blok.title }}</h1>
    <div class="grid grid-cols-4">
      <StoryblokComponent v-for="f in blok.feature" :key="f.u_id" :blok="f" />
    </div>
  </div>
</template>
