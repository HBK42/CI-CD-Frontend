module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential', // Extends Vue 3 essential rules
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript version
    sourceType: 'module',
  },
  plugins: [
    'vue', // Enables ESLint plugin for Vue
  ],
  rules: {
    'vue/multi-word-component-names': 'off', // Disables the rule that enforces multi-word component names in Vue
    // Add more rules or override rules as needed
  },
};
