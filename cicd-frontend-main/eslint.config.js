module.exports = [
  {
    files: ['**/*.js', '**/*.vue'],
    processor: 'vue/.vue',
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        axios: true,
        vue: true,
      },
    },
    plugins: {
      vue: require('eslint-plugin-vue'),
    },
    rules: {
      // Fügen Sie benutzerdefinierte Regeln hinzu, falls benötigt
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended'
    ],
  },
];
