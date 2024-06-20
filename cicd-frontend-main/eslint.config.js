export default {
  overrides: [
    {
      files: ['**/*.js', '**/*.vue'],
      processor: 'vue/.vue',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended'
      ],
      rules: {
        // Fügen Sie benutzerdefinierte Regeln hinzu, falls benötigt
      },
      globals: {
        // Definieren Sie globale Variablen hier, falls benötigt
        axios: true,
        vue: true,
      },
    },
  ],
};
