import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2", // fundo off-white quente
        nude: "#C9A88A", // tom terroso/nude
        wine: "#6E2233", // acento vinho/bordô
        graphite: "#2B2724", // texto grafite
        placeholder: "#EDEAE6", // fundo do placeholder de imagem
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        label: "0.25em",
      },
      screens: {
        // mobile-first: base = mobile; sm/md/lg para telas maiores
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};

export default config;
