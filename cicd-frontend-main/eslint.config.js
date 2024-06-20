module.exports = [
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue: {
        // Konfiguration für das Vue-Plugin hier angeben, falls erforderlich
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      // Weitere Regeln hinzufügen, falls erforderlich
    },
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
        jest: true,
      },
    },
  },
  // Weitere Konfigurationen hinzufügen, falls erforderlich
];
