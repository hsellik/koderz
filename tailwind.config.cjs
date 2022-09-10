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
      backgroundImage: {
        'hero': "url('/src/assets/images/hero-background.png')",
      },
      colors: {
        primary: {
          light: createColor({ variable: '--color-primary-light' }),
          DEFAULT: createColor({ variable: '--color-primary' }),
          dark: createColor({ variable: '--color-primary-dark' }),
        },
      },
    },
  },
  plugins: [],
};
