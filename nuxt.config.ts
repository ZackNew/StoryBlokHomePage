// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_API_TOKEN }],
  ],
  css: ["@mdi/font/css/materialdesignicons.css", "@unocss/reset/tailwind.css"],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    typography: true, // enabled `@unocss/preset-typography`
  },
  build: {
    transpile: ["@marvr/storyblok-rich-text-vue-renderer"],
  },
});
