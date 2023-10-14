<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
const { faqs, fetchFaq, getFormattedFaqs } = useFaq();
await fetchFaq();

// const toggleAccordion = (index: number) => {
//   const updatedFaqs = [...faqs.value];
//   updatedFaqs[index].open = !updatedFaqs[index].open;
//   faqs.value = updatedFaqs;
// };
</script>

<template>
  <div class="w-[90%] max-w-[1350px] mx-auto m-10">
    <h3 class="text-[#4761FF] text-xl mb-4">FAQs</h3>
    <h1 class="text-4xl font-bold mb-8">{{ blok.title }}</h1>
    <div class="space-y-4">
      <div
        v-for="faq in getFormattedFaqs"
        :key="faq.id"
        class="border p-2 rounded-lg"
      >
        <div
          class="flex justify-between items-center cursor-pointer"
          @click="faq.open = !faq.open"
        >
          <h2 class="text-lg capitalize">{{ faq.name }}</h2>
          <svg
            class="w-6 h-6 transition-transform transform"
            :class="{ 'rotate-180': faq.open }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div v-if="faq.open" class="pt-2">
          <p v-html="faq.content"></p>
        </div>
        {{ faq }}
      </div>
    </div>
  </div>
</template>
