<script setup lang="ts">
const story = await useStoryblok("home", {
  version: process.env.NODE_ENV === "production" ? "published" : "draft",
});
</script>

<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
