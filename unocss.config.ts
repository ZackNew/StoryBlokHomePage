import {
  defineConfig,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  presetIcons,
  presetTypography,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        // these will extend the default theme
        sans: ["Open Sans", "Open Sans:400,700"],
        mono: ["Fira Code", "Fira Mono:400,700"],
        display: ["Dosis", "Dosis:400,700"],
      },
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
        // ...
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
