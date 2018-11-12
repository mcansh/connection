module.exports = {
  extends: ['mcansh'],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['__NEXT_DATA__'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', 'jest.*.js'],
      },
    ],
  },
};
