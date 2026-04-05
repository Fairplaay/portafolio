/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        industrial: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#8298b4',
          500: '#1E3A8A', // Steel Blue
          600: '#1a2d6e',
          700: '#15244d',
          800: '#111827', // Charcoal
          900: '#0d1117',
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber
          light: '#FBBF24',
          dark: '#D97706',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        industrial: {
          'primary': '#1E3A8A',
          'secondary': '#F59E0B',
          'accent': '#10B981',
          'neutral': '#111827',
          'base-100': '#f8fafc',
          'base-200': '#e2e8f0',
          'base-300': '#cbd5e1',
          'info': '#3b82f6',
          'success': '#22c55e',
          'warning': '#f59e0b',
          'error': '#ef4444',
        },
      },
    ],
    darkTheme: 'industrial',
  },
};