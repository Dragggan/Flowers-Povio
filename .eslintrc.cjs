/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "linebreak-style": 0,
    eqeqeq: "off",
    curly: "error",
    quotes: ["error", "double"],
    "max-len": [
      "error",
      {
        code: 140,
        ignoreUrls: true,
      },
    ],
  },
};
