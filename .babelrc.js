module.exports = {
  presets: ['next/babel', '@babel/preset-flow'],
  plugins: ['styled-components'],
  env: {
    development: {
      plugins: ['react-intl'],
    },
    production: {
      plugins: [['react-intl', { messagesDir: 'lang/.messages' }]],
    },
  },
};
