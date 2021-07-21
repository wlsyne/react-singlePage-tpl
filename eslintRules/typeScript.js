module.exports = {
  // ESLint rule "indent" must be disabled in TypeScript
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md#options
  indent: 'off',
  // JSX related indent should be handled by react/jsx-indent
  '@typescript-eslint/indent': ['error', 2, { ignoredNodes: ['JSXElement *', 'JSXElement'], SwitchCase: 1 }],

  // ESLint rule "semi" must be disabled in TypeScript
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
  semi: 'off',
  '@typescript-eslint/semi': ['error'],

  // ESLint rule "no-use-before-define" must be disabled in TypeScript
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [2],

  // ESLint rule "no-shadow" must be disabled in TypeScript
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': [2, { ignoreTypeValueShadow: true }],

  // https://github.com/typescript-eslint/typescript-eslint/issues/2528#issuecomment-689369395
  'no-undef': 'off',

  // ESLint rule "camelcase" must be disabled in TypeScript
  // Use "@typescript-eslint/naming-convention" instead
  camelcase: 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'parameter',
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'property',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
      filter: {
        // Exclude property which name contains '-' or ' ', such as HTTP headers
        regex: '[- ]',
        match: false,
      },
    },
    {
      selector: 'property',
      modifiers: ['private'],
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'require',
      filter: {
        // Exclude property which name contains '-' or ' ', such as HTTP headers
        regex: '[- ]',
        match: false,
      },
    },
    {
      selector: 'method',
      modifiers: ['public'],
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'forbid',
    },
    {
      selector: 'method',
      modifiers: ['private'],
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'require',
      filter: {
        // Exclude React UNSAFE_ lifecycle methods
        regex: '^UNSAFE_',
        match: false,
      },
    },
  ],

  // ESLint rule "quotes" must be disabled in TypeScript
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
  quotes: 'off',
  '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

  // ESLint rule "no-unused-vars" must be disabled in TypeScript
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      vars: 'all',
      args: 'none',
    },
  ],

  // ESLint rule "no-useless-constructor" must be disabled in TypeScript
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
  'no-useless-constructor': 'off',

  // If a class has a same name as interface, an error will be thrown
  'import/export': 'off',

  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-ignore': 'allow-with-description',
      'ts-expect-error': true,
      'ts-check': true,
      'ts-nocheck': 'allow-with-description',
      minimumDescriptionLength: 3,
    },
  ],
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/unified-signatures': 'warn',
  '@typescript-eslint/restrict-plus-operands': 'off',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-inferrable-types': 'warn',
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        String: {
          message: 'Use string instead',
          fixWith: 'string',
        },
        Number: {
          message: 'Use number instead',
          fixWith: 'number',
        },
        Boolean: {
          message: 'Use boolean instead',
          fixWith: 'boolean',
        },
        Object: {
          message: 'Use object instead',
          fixWith: 'object',
        },
      },
    },
  ],
  '@typescript-eslint/member-delimiter-style': 'error',
  '@typescript-eslint/member-ordering': 'off',
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-var-requires': 'off',
};
