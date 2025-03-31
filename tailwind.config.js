/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{tsx,ts}',
      './src/components/**/*.{tsx,ts}',
      './src/components/*.{tsx,ts}',
      './src/pages/*.{tsx,ts}',
      './src/conf.tsx',
    ],
    safelist: [
    ],
    theme: {
      extend: {
        animation: {
        },
        keyframes: {
        },
        colors: {
        },
      },
    },
    plugins: [],
  };