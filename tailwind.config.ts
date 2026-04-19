import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        linen: '#F5F2ED',
        stone: '#EAE6DF',
        charcoal: '#1C1C1A',
        brass: '#B8924A',
        muted: '#6B6560',
        'off-white': '#FAFAF8',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        jost: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      borderColor: {
        rule: 'rgba(28, 28, 26, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config
