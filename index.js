module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "es2020", // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports

  },
  ignorePatterns: ['.*rc.js', '*.config.js', '*.config.*.js'],
  plugins: [
    '@typescript-eslint',

  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:prettier/recommended",
  ],

  rules: {
    "@typescript-eslint/no-explicit-any": "off", // We are not ready yet
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",

    "spaced-comment": ["warn", "always", { "block": { "balanced": true, "exceptions": ["/"] }, }],
    "@typescript-eslint/no-unsafe-return": "off",


    "@typescript-eslint/explicit-member-accessibility": ["error", { "overrides": { constructors: 'off' } }],
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],

    //This one was HARD to write. This should enforce pretty much all the naming conventions...
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "memberLike", modifiers: ['static'], format: ["UPPER_CASE", "camelCase"], leadingUnderscore: "forbid", trailingUnderscore: "forbid" }, //static members can be UPPER_CASE
      { selector: "memberLike", modifiers: ['private', 'readonly'], format: ["UPPER_CASE", "camelCase"], leadingUnderscore: "allow", trailingUnderscore: "forbid" }, //static members can be UPPER_CASE
      { selector: "memberLike", modifiers: ['static', 'private'], format: ["UPPER_CASE", "camelCase"], leadingUnderscore: "allow", trailingUnderscore: "forbid" }, //need to duplicate the rule above
      { selector: "memberLike", modifiers: ["private"], format: ["camelCase"], leadingUnderscore: "allow", trailingUnderscore: "forbid" }, //privates can start with underscore only if they shadow fields
      { selector: "variable", modifiers: ['const'], format: ["UPPER_CASE", "camelCase"], leadingUnderscore: "forbid", trailingUnderscore: "forbid" }, //const global variables can be UPPER_CASE

      { selector: "variableLike", format: ["camelCase"], leadingUnderscore: "forbid", trailingUnderscore: "forbid" }, //variables have to be camel
      { selector: "memberLike", format: ["camelCase"], leadingUnderscore: "forbid", trailingUnderscore: "forbid" }, //members have to be camel


      { selector: "parameter", format: ["camelCase"], leadingUnderscore: "allow", trailingUnderscore: "forbid" }, //privates can start with underscore only if they shadow fields
      { selector: "enumMember", format: ["UPPER_CASE"], leadingUnderscore: "forbid", trailingUnderscore: "forbid" }, //Enums Memebers are UPPER_CASE
      { selector: "typeLike", format: ["PascalCase"], leadingUnderscore: "forbid", trailingUnderscore: "forbid" }, // Types are PascalCase
    ],

    "no-implicit-coercion": "error",

    "curly": "error",
    "@typescript-eslint/no-floating-promises": "off",
    "prefer-template": 1,
    "template-curly-spacing": [1, "never"],
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/unbound-method": "off", //pixijs binds differently to .bind
    "@typescript-eslint/no-unsafe-argument": "off",
    "prettier/prettier": [
      "warn",
      {
        semi: true,
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 180,
        tabWidth: 4,
        useTabs: true,
      }
    ],

    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],

    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",

    // I trust ts
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",

    //I don't understand it
    "@typescript-eslint/no-namespace": "off",

    // enums don't work with this
    "@typescript-eslint/no-unsafe-enum-comparison": "off",

    //
    "@typescript-eslint/ban-types": ["error",
      {
        extendDefaults: true,
        types: {
          Function: {
            message: [
              'The `Function` type accepts any function-like value.',
              'It provides no type safety when calling the function, which can be a common source of bugs.',
              'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
              'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
            ].join('\n'),
            fixWith: '() => void',
          },
        }
      }]
  }
};