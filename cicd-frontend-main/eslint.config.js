const { FlatCompat } = require("@eslint/eslintrc");
const path = require("path");

// Mimic CommonJS variables
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

module.exports = [
    ...compat.extends("eslint-config-my-config"),
];
