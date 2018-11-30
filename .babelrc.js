module.exports = {
  presets: ['next/babel', '@babel/preset-flow'],
  env: {
    development: {
      plugins: ['styled-components'],
    },
    production: {
      plugins: ['styled-components'],
    },
    test: {
      plugins: ['styled-components', 'transform-dynamic-import'],
    },
  },
};
