module.exports = {
  verbose: true,
  bail: true,
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
    '<rootDir>/jest.setup.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/flow-typed/',
  ],
};
