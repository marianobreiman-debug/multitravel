/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'mt': {
          'blue-900': '#0D4E88',
          'blue-700': '#1A5FA0',
          'blue-600': '#226FCB',
          'blue-100': '#DBEAFE',
          'blue-50':  '#EFF6FF',
          'red-600':  '#DC2626',
          'red-500':  '#EF4444',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 12px 0 rgba(0,0,0,0.08)',
        'card-lg': '0 8px 32px 0 rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'pill': '100px',
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};
