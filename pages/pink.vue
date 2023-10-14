<template>
  <div>
    <div class="space-y-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="border rounded p-4"
      >
        <button
          @click="toggleItem(index)"
          class="flex justify-between items-center w-full"
        >
          <h3 class="text-lg font-medium">{{ item.title }}</h3>
          <span
            :class="{ 'transform rotate-180': item.open }"
            class="transition-transform duration-200 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v6.586l2.293-2.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L9 10.586V4a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </button>
        <div v-show="item.open" class="mt-2">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Item 1",
          content: "Content of item 1",
          open: false,
        },
        {
          title: "Item 2",
          content: "Content of item 2",
          open: false,
        },
        {
          title: "Item 3",
          content: "Content of item 3",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleItem(index) {
      this.items[index].open = !this.items[index].open;
    },
  },
};
</script>
