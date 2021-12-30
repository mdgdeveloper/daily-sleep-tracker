module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'linebreak-style': 0,
    quotes: ['warn', 'single'],
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
  },
};
