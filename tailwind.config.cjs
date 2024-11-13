// tailwind.config.js
import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // or 'media' if you want to respect system preferences
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: "#0D0D0D",
          foreground: "#ECEDEE",
          primary: {
            50: '#E6E7FF',
            100: '#C7C9FF',
            200: '#A9ABFF',
            300: '#8B8DFF',
            400: '#6D6FFF',
            500: '#4F51FF',
            600: '#3F41CC',
            700: '#2F3199',
            800: '#1F2066',
            900: '#0F1033',
            DEFAULT: '#4F51FF',
            foreground: '#FFFFFF',
          },
        },
      },
    },
  })],
};

export default config;
