module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    // Weitere Regeln hinzufügen, falls erforderlich
  },
};
