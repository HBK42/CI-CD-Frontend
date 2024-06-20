// eslint.config.js
import { ESLint } from 'eslint';
import vue from 'eslint-plugin-vue';

export default [
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      vue,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/essential',
    ],
    rules: {
      // Add custom rules here
    },
  },
];
