/** @type {import('tailwindcss').Config} */
module.exports = {
  /* ── Enable class-based dark mode ─────────────────────────────── */
  darkMode: 'class',

  /* ── Tell Tailwind where to look for class names ──────────────── */
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  /* ── Custom theme extensions for Labees ───────────────────────── */
  theme: {
    extend: {
      /* Brand palette */
      colors: {
        /* ultra-dark neutrals */
        dark1: '#111111',
        dark2: '#1b1b1b',
        dark3: '#262626',

        /* brand blues/purples */
        midnightBlue:   '#1A2A6C',
        deepViolet:     '#3B185F',
        electricPurple: '#9D4EDD',
      },

      /* Font family (Manrope) */
      fontFamily: {
        display: ['"Manrope"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },

  /* ── No extra plugins right now ───────────────────────────────── */
  plugins: [],
};
