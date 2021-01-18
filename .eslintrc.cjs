module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  env: {
    node: true,
    es6: true,
  },
  settings: {
    node: {
      tryExtensions: [".ts", ".json"],
    },
  },
  rules: {
    // "no-console": ["off"],
    // "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    // "no-underscore-dangle": 0,
    // "no-prototype-builtins": 0,
    // "require-atomic-updates": "off",
    // "node/no-unsupported-features/es-syntax": "off",
    // camelcase: "off",
    // "@typescript-eslint/camelcase": ["off"],
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
};
