module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  extends: ["standard", "prettier"],

  // add your custom rules here
  rules: {
    "global-require": 0,
    "arrow-body-style": 0,
    "consistent-return": 0,
    "prefer-template": 0,
    "no-useless-concat": 0,
    "no-useless-constructor": 0,
    "jsx-a11y/img-has-alt": 0,
    "array-callback-return": 0,
    quotes: 0,
    "no-duplicate-imports": 0,
    "no-unneeded-ternary": 0,
    "no-whitespace-before-property": 0,
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 2,
    "jsx-quotes": 2,
    "block-scoped-var": 0,
    "padded-blocks": 0,
    "comma-dangle": 0,
    "comma-spacing": 1,
    indent: [2, 2, { SwitchCase: 1 }],
    "no-console": 0,
    "no-alert": 0,
    "prefer-const": 1,
    semi: 0,
    "no-unused-semi": 0,
    "no-unused-vars": [
      0,
      {
        args: "after-used",
        varsIgnorePattern: "PropTypes",
        argsIgnorePattern: "[iI]gnored"
      }
    ],
    "no-trailing-spaces": 1,
    "no-multiple-empty-lines": 1,
    "spaced-comment": 1,
    "no-underscore-dangle": 0,
    "max-len": 1,
    "no-extra-semi": 0,
    "space-before-function-paren": 0,
    "no-debugger": 2,
    "generator-star-spacing": 0
  }
};
