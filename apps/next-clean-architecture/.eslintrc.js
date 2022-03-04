module.exports = {
  ...require('config/eslint-next.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
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
}
