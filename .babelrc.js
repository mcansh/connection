module.exports = {
  presets: ['next/babel', '@babel/preset-flow'],
  env: {
    development: {
      plugins: ['styled-components', 'react-intl'],
    },
    production: {
      plugins: [
        'styled-components',
        ['react-intl', { messagesDir: 'lang/.messages' }],
      ],
    },
    test: {
      plugins: ['styled-components', 'react-intl', 'transform-dynamic-import'],
    },
  },
};
