import type { Config } from "tailwindcss";

export default {
  // darkMode: "class" means dark mode is triggered by the "dark" class on the HTML element
  // (not by system settings like prefers-color-scheme)
  darkMode: "class",
  // Tell Tailwind where to find all the HTML/TSX files so it can apply Tailwind classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;
