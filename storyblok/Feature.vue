<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="bg-white rounded-lg p-10 drop-shadow-lg text-center">
    <img
      class="items-center mx-auto"
      :src="blok.media.filename"
      :alt="blok.media.alt"
    />
    <h1 class="my-4 font-bold text-lg">{{ blok.title }}</h1>
    <p>{{ blok.text }}</p>
  </div>
</template>
