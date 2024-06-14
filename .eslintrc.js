module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    'react-native/no-inline-styles': 'error',
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
  },
};
