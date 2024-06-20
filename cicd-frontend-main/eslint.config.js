import vue from 'eslint-plugin-vue';

export default [
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        axios: true,
        vue: true,
      },
    },
    plugins: {
      vue,
    },
    processor: 'vue/.vue',
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
    ],
    rules: {
      // Fügen Sie benutzerdefinierte Regeln hinzu, falls benötigt
    },
  },
];
