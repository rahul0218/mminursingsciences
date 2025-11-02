// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#607AFB',
        'dark-blue': '#1F2937',
        'rich-black': '#111827',
        'slate-gray': '#4B5563',
        'light-gray': '#F5F6F8',
        'ghost-white': '#F3F4F6',
        'border-gray': '#D1D5DB',
        'text-gray': '#9CA3AF',
        'primary-light': 'rgba(96, 122, 251, 0.1)',
      },
      fontFamily: {
        sans: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
