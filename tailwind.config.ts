import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
