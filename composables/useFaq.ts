const state = reactive({
  faqs: [],
});

export function useFaq() {
  const storyblokApi = useStoryblokApi();

  async function fetchFaq() {
    const { data } = await storyblokApi.get("cdn/stories", {
      version: "draft",
      starts_with: "faqs",
      is_startpage: false,
    });
    state.faqs = data.stories;
  }

  const getFormattedFaqs = computed(() =>
    state.faqs.map(({ name, id, content }) => ({
      id,
      name,
      content,
      open: true,
    }))
  );

  return {
    ...toRefs(state),
    fetchFaq,
    getFormattedFaqs,
  };
}
