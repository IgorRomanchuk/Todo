import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import eslintReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import airbnbTypeScript from "eslint-config-airbnb-typescript";

export default [
  {
    plugins: {
      "react-hooks": eslintReactHooks,
      react: eslintReact,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
      "airbnb-typescript": airbnbTypeScript
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
      // Disable prefer default export
      "import/prefer-default-export": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "react/jsx-filename-extension": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      // since redux-slice changes state directly
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: ["state", "config"],
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
    },
  },
];
