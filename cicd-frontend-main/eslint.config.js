module.exports = {
  root: true, // Make sure ESLint picks up the config at the root of the directory

  env: {
    node: true, // This allows the use of Node.js global variables and Node.js scoping
  },

  parserOptions: {
    parser: 'babel-eslint', // Use babel-eslint for parsing JavaScript files
    ecmaVersion: 2021, // Use the latest ECMAScript standard
    sourceType: 'module', // Allows for the use of imports
  },

  extends: [
    'eslint:recommended', // Use the built-in recommended rules from ESLint
    'plugin:vue/vue3-recommended', // Use ESLint plugin for Vue.js 3 recommended rules
  ],

  rules: {
    // Add your own custom rules or overrides here
    // For example:
    // 'vue/no-multiple-template-root': 'off', // Allow multiple root elements in Vue components
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Adjust console rule based on environment
  },
};
