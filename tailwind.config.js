/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0D14',
          card: '#10141C',
          elevated: '#151A24',
        },
        gold: {
          DEFAULT: '#D4A94F',
          hover: '#C4952E',
          light: '#E5C578',
          subtle: 'rgba(212, 169, 79, 0.15)',
        },
        text: {
          primary: '#F1EEE6',
          body: '#B8B4AC',
          muted: '#7A7670',
        },
        divider: 'rgba(255, 255, 255, 0.08)',
        'divider-gold': 'rgba(212, 169, 79, 0.3)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"EB Garamond"', 'Lora', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'nav': '0.18em',
        'eyebrow': '0.22em',
      },
    },
  },
  plugins: [],
}
