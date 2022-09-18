const defaultTheme = require('tailwindcss/defaultTheme');

const createColor = ({ variable }) => {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variable}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `hsla(var(${variable}), var(${opacityVariable}, 1))`;
    }
    return `hsla(var(${variable}))`;
  };
};

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/hero-background.png')",
        'ufo': "url('/src/assets/icons/ufo.svg')"
      },
      fontSize: {
        h1: [`var(--h1-size)`, { lineHeight: `var(--h1-line-height)` }],
        h2: [`var(--h2-size)`, { lineHeight: `var(--h2-line-height)` }],
        h3: [`var(--h3-size)`, { lineHeight: `var(--h3-line-height)` }],
        h4: [`var(--h4-size)`, { lineHeight: `var(--h4-line-height)` }],
        h5: [`var(--h5-size)`, { lineHeight: `var(--h5-line-height)` }],
        h6: [`var(--h6-size)`, { lineHeight: `var(--h6-line-height)` }],
      },
      colors: {
        primary: {
          DEFAULT: createColor({ variable: '--color-primary' }),
        },
        secondary: {
          DEFAULT: createColor({ variable: '--color-secondary' }),
          dark: createColor({ variable: '--color-secondary-dark' }),
        },
        error: {
          DEFAULT: createColor({ variable: '--color-error' }),
        },
        background: {
          DEFAULT: createColor({ variable: '--color-background' }),
        },
        'background-secondary': {
          DEFAULT: createColor({ variable: '--color-background-secondary' }),
        },
      },
    },
  },
  plugins: [],
};
