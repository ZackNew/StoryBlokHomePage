<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div v-editable="blok">
    <StoryblokComponent v-for="b in blok.body" :key="b.u_id" :blok="b" />
  </div>
</template>
