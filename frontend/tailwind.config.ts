import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-in-fwd-center": "slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      },
      keyframes: {
          "slide-in-fwd-center": {
              "0%": {
                  transform: "translateZ(-1400px)",
                  opacity: "0"
              },
              to: {
                  transform: "translateZ(0)",
                  opacity: "1"
              }
          }
      },
    },
  },
  plugins: [],
};
export default config;
