<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <button class="bg-[#4761FF] rounded-full py-3 px-8 text-white text-xl">
    {{ blok.label }}
  </button>
</template>
