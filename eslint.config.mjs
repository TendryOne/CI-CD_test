import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintpluginJest from "eslint-plugin-jest";

export default defineConfig([
  {
    ignores: ["node_modules/**", ".github/**", "dist/**", "eslint.config.mjs"],
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      ...js.configs.recommended.plugins,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: globals.browser,
      sourceType: "commonjs",
    },

    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.test.js"],
    plugins: {
      jest: eslintpluginJest,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...eslintpluginJest.configs.recommended.rules,
    },
  },
  eslintConfigPrettier,
]);
