// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  parser: 'vue-eslint-parser', // 新加的
  env: {
    browser: true,
    node: true,// 新加的
    es6: true,// 新加的
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "comma-dangle": [1, "never"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "space-before-function-paren": 0,
    "quotes": [1, "single"],
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
