import js from "@eslint/js";
import eslintPluginImportX from "eslint-plugin-import-x";
import noOnlyTests from "eslint-plugin-no-only-tests";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  reactRefresh.configs.recommended,
  storybook.configs["flat/recommended"],
  {
    // https://github.com/eslint/eslint/discussions/18304
    ignores: ["public/**", "build/**", "lib/icons/components/**"],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": hooksPlugin,
      "no-only-tests": noOnlyTests,
    },
    rules: {
      "no-console": 1,
      "no-duplicate-imports": 1,
      "sort-imports": [
        1,
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      "import-x/default": 0,
      "import-x/no-named-as-default": 0,
      "import-x/no-named-as-default-member": 0,
      "import-x/order": [
        1,
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "@hooks/**",
              group: "internal",
            },
            {
              pattern: "@icons/**",
              group: "internal",
            },
            {
              pattern: "@gds/**",
              group: "internal",
            },
            {
              pattern: "@ui/**",
              group: "internal",
            },
            {
              pattern: "@utils/**",
              group: "internal",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "*.scss",
              group: "index",

              patternOptions: {
                matchBase: true,
              },

              position: "after",
            },
          ],
        },
      ],
      "react-refresh/only-export-components": [
        1,
        {
          allowConstantExport: true,
        },
      ],
      "@typescript-eslint/consistent-type-definitions": [1, "type"],
      "@typescript-eslint/consistent-type-imports": [
        1,
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "no-only-tests/no-only-tests": 2,
      "@typescript-eslint/no-unused-vars": 1,
      "@typescript-eslint/no-explicit-any": 1,
      "prefer-const": 1,
      "react/no-unescaped-entities": 1,
      "react/display-name": 0,
      "react/prop-types": 0,
    },
  },
  {
    files: ["**/*.test.*"],
    rules: {
      "@typescript-eslint/no-unused-expressions": 0,
    },
  }
);
