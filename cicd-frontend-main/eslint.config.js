import eslintPluginVue from 'eslint-plugin-vue';

export default [
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
      vue: eslintPluginVue,
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
