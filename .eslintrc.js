const reactRules = require('./eslintRules/react');
const commonRules = require('./eslintRules/common');
const importRules = require('./eslintRules/import');
const typeScriptRules = require('./eslintRules/typeScript');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', 'import'],
  rules: {
    ...commonRules,
    ...importRules,
    ...reactRules,
    ...typeScriptRules,
  },
};
