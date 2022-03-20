/* eslint-disable */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'vue/setup-compiler-macros': true,
    'cypress/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    'cypress'
  ],
  'rules': {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'vue/multi-word-component-names': 0
  }
}
