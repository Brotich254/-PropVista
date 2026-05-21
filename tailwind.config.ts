import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17211f",
        leaf: "#1f7a5b",
        clay: "#d86f45",
        sun: "#f0b84f",
        mist: "#eef5f1",
        stone: "#f8f6f1"
      },
      boxShadow: {
        soft: "0 22px 60px rgba(23, 33, 31, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
