<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="w-[50%] max-w-[1350px] mx-auto">
    <h3 class="text-[#4761FF] text-xl mb-4">Contact us</h3>
    <h1 class="text-4xl font-bold mb-8">{{ blok.title }}</h1>
    <p class="mb-8">{{ blok.description }}</p>
    <form class="grid grid-cols-2">
      <div v-for="input in blok.form[0].input">
        <div>
          <textarea
            class="border border[#777777] px-4 py-2 rounded-lg text-lg m-2 w-full"
            v-if="input.type === 'textarea'"
            :name="input.name"
            :placeholder="input.placeholder"
            rows="4"
            cols="50"
          />
          <input
            class="border border[#777777] px-4 py-2 rounded-lg text-lg m-2 w-[90%]"
            v-else
            :type="input.type"
            :placeholder="input.placeholder"
            :name="input.name"
          />
        </div>
      </div>
    </form>
    <ul>
      <li v-for="act in blok.form[0].action">
        <StoryblokComponent :blok="act" />
      </li>
    </ul>
  </div>
</template>
