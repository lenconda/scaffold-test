module.exports = {
  extends: [
    'eslint-config-alloy/react',
  ],
  plugins: [
    'react-hooks',
  ],
  globals: {},
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  rules: {
    indent: [
      'error',
      2
    ],
    'react/jsx-indent-props': [
      'error',
      2
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-indent': [
      'error',
      2
    ],
    'react-hooks/exhaustive-deps': 'off',
    'eol-last': 2,
    quotes: [2, 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'complexity': 'off',
  }
};
