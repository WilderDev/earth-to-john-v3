const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-josefin-sans)'],
        serif: ['var(--font-lato)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(({ addVariant }) => addVariant('hocus', ['&:hover', '&:focus'])),
    plugin(({ addVariant }) => addVariant('around', ['&:before', '&:after'])),
    plugin(({ addVariant, e }) => {
      addVariant('peer', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`peer${separator}${className}`)}:hover, .${e(
            `peer${separator}${className}`,
          )}:focus, .${e(`peer${separator}${className}`)}:active, .${e(
            `peer${separator}${className}`,
          )}:visited`;
        });
      });
    }),
  ],
};
