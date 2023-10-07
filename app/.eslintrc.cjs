module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    // Allow unused _foo variables
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    // Code is more readable with this turned off.
    // Consider turning back on if it bites us in the ass
    "react-hooks/exhaustive-deps": "off",
    // Warning instead of error
    "@typescript-eslint/no-explicit-any": "warn",
    // Only important on servers
    "no-prototype-builtins": "off",
  },
};
