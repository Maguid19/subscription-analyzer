import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // OpportunAI inspired colors
        primary: {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fbd5b0',
          300: '#f8b87d',
          400: '#f59347',
          500: '#f2751f', // Main orange/terracotta
          600: '#e35d15',
          700: '#bc4513',
          800: '#963816',
          900: '#7a3016',
        },
        background: {
          DEFAULT: '#faf9f6', // Light beige background
          50: '#fefefe',
          100: '#faf9f6',
          200: '#f5f4f1',
          300: '#e8e6e0',
          400: '#d4d1c8',
          500: '#b8b4a8',
        },
        text: {
          DEFAULT: '#1a1a1a', // Dark gray text
          secondary: '#6b7280',
          muted: '#9ca3af',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;