export default {
  content: ["./index.html", "./src/**/*.{js,ts}", "../daisyui/src/usedStyle.ts"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"]
  }
};
