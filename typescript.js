module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses rules from `@typescript-eslint/eslint-plugin`,
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // Layer in all the JS Rules
    './.eslintrc.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // This allows us to use async function on addEventListener().
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 1,
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'warn',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/array-type': [
      2,
      {
        default: 'generic',
      },
    ],
    '@typescript-eslint/unbound-method': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
