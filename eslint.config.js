import tsPlugin from '@typescript-eslint/eslint-plugin';
import angularPlugin from '@angular-eslint/eslint-plugin';
import templatePlugin from '@angular-eslint/eslint-plugin-template';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // TypeScript files
  {
    files: ['src/**/*.ts'], // <-- match all TS files recursively in src
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': angularPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      semi: ['error', 'always'],
      '@typescript-eslint/semi': ['error', 'always'],
      'prettier/prettier': ['error', { semi: true }],
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@angular-eslint/recommended',
      'plugin:prettier/recommended',
    ],
  },

  // Angular HTML templates
  {
    files: ['src/**/*.html'], // <-- match all HTML files recursively in src
    plugins: {
      '@angular-eslint/template': templatePlugin,
    },
    extends: ['plugin:@angular-eslint/template/recommended'],
  },
];
