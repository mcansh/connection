module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
  env: {
    development: {
      plugins: ['react-intl'],
    },
    production: {
      plugins: [['react-intl', { messagesDir: 'lang/.messages' }]],
    },
  },
};
