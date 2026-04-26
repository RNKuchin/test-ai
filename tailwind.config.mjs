/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          dark: '#0052A3',
        },
        accent: {
          DEFAULT: '#00CC66',
          dark: '#00A352',
        },
        urgent: '#FF6B35',
      },
      maxWidth: {
        'custom': '1200px',
      },
    },
  },
  plugins: [],
}
