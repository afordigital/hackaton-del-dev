import { defineConfig, presetIcons, presetWebFonts, presetUno } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      cBackground: "#161616",
      cPrimary: "#151515",
      cSecondary: "#2E2E2E",
      cTertiary: "#A8A8A8",
      cWhite: "#EFEFEF",
      cGreenText: "#35D78B",
      cGreenButton: "#2F8F62",
      cGreenStroke: "#33CA86",
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {},
    }),
    presetIcons({
      cdn: "https://esm.sh/",
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
