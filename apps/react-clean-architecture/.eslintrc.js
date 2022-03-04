// to do
// implement shared eslint for this config
module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2017,
    requireConfigFile: false,
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest',
    'prettier',
  ],
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-restricted-globals': 'off',
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/alt-text': 'off',
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    'coverage',
    'build',
    '.turbo',
  ],
}