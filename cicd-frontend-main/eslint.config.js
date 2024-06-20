module.exports = {
  languageOptions: {
    globals: {
      // Define your global variables here, if any
      // For example:
      process: true,
      // Add other global variables as needed
    },
    ecmaVersion: 2020, // Specify the ECMAScript version
    sourceType: 'module', // Specify the source type
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:react/recommended',
    // Add other configurations you want to extend from directly
  ],
  rules: {
    // Add your custom rules here
  },
};
