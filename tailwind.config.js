/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /(from|to|bg|text|border|ring|divide|outline)-(blue|emerald|amber|purple|red|indigo)-(50|100|200|400|600|800|900)/,
      variants: ['dark'],
    },
  ],
};
