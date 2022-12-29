module.exports = {
  env: {
    "cypress/globals": true,
  },
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:cypress/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["cypress", "import", "simple-import-sort"],
  rules: {
    "react/jsx-curly-brace-presence": [
      2,
      {
        props: "never",
        children: "never",
        propElementValues: "always",
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Load imports with side-effects first, because duh
          ["^\\u0000"],
          // node, react + remix imports at the top
          ["^node:\\w", "^react(-dom)?/?", "^@remix-run/\\w"],
          // Group Spor imports with chakra imports to simplify merging when possible
          ["^@vygruppen/\\w", "^@chakra-ui/\\w"],
          // Other npm imports
          ["^(?!@topas-portal)@?\\w"],
          // All @topas-portal imports
          ["^@topas-portal/\\w", "^@vy-clients/\\w"],
          // Relative imports, should most likely be transformed to @topas-portal imports
          ["^~", "^\\."],
        ],
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};