module.exports = {
  files: ['**/*.js', '**/*.vue'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: {
    vue: require('eslint-plugin-vue'),
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
  ],
  rules: {
    // Add custom rules here
  },
};
