import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import eslintReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    plugins: {
      "react-hooks": eslintReactHooks,
      react: eslintReact,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ["node-modules", "dist"],
  },
  ...tseslint.configs.recommended,
  js.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
      curly: "off",
      "no-unexpected-multiline": "off",
      "@typescript-eslint/lines-around-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
