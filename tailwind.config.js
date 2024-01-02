/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      gray: '#eeeeee',
      black: '#121212',
      primary: {
        DEFAULT: '#124734',
        dark: '#040E0A',
        'medium-dark': '#0B2B1F',
        'medium-light': '#A0B5AE',
        light: '#D0DAD6',
      },
      onshore: {
        DEFAULT: '#15BC3B',
        dark: '#04260C',
        'medium-dark': '#097223',
        'medium-light': '#A1E4B1',
        light: '#E7F8EB',
      },
      offshore: {
        DEFAULT: '#027FFF',
        dark: '#011933',
        'medium-dark': '#004C99',
        'medium-light': '#99CCFF',
        light: '#E4F2FF',
      },
      solar: {
        DEFAULT: '#FFC103',
        dark: '#332700',
        'medium-dark': '#997402',
        'medium-light': '#FFE699',
        light: '#FFF6D9',
      },
      storage: {
        DEFAULT: '#B4B4B4',
        dark: '#242424',
        'medium-dark': '#6C6C6C',
        'medium-light': '#E1E1E1',
        light: '#F0F0F0',
      },
    },
    fontSize: {
      '10xl': [
        '140px',
        {
          lineHeight: '100%',
          fontWeight: 500,
        },
      ],
      '9xl': [
        '120px',
        {
          lineHeight: '100%',
          fontWeight: 500,
        },
      ],
      '7xl': [
        '76px',
        {
          lineHeight: '105%',
          fontWeight: 500,
        },
      ],
      '6xl': [
        '60px',
        {
          lineHeight: '115%',
          fontWeight: 500,
        },
      ],
      '5xl': [
        '48px',
        {
          lineHeight: '110%',
          fontWeight: 500,
        },
      ],
      '4xl': ['36px', '115%'],
      '3xl': ['28px', '120%'],
      '2xl': ['24px', '120%'],
      xl: ['20px', '120%'],
      lg: ['18px', '120%'],
      base: ['16px', '130%'],
      sm: ['14px', '100%'],
      xs: [
        '12px',
        {
          lineHeight: '120%',
          fontWeight: 600,
        },
      ],
    },
    extend: {
      fontFamily: {
        figtree: [
          'var(--font-family-figtree)',
          {
            fontFeatureSettings: '"ss01"',
          },
        ],
      },
      spacing: {
        10: '40px',
        13: '52px',
        15: '60px',
        25: '100px',
        30: '120px',
        35: '140px',
        40: '160px',
        45: '180px',
      },
      borderRadius: {
        DEFAULT: '20px',
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/5': '4 / 5',
        '4/3': '4 / 3',
        '5/4': '5 / 4',
      },
      zIndex: {
        navbar: 100,
        modal: 110,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
