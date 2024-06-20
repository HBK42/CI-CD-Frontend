const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginVue = require("eslint-plugin-vue");

module.exports = {
  files: ["**/*.{js,mjs,cjs,vue}"],
  languageOptions: { globals: globals.browser },
  extends: [pluginJs.configs.recommended, ...pluginVue.configs["flat/essential"]],
};