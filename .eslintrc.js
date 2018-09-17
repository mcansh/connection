module.exports = {
  extends: ['mcansh'],
  rules: {
    'no-underscore-dangle': ["error", { allow: ['__NEXT_DATA__']}]
  }
};
