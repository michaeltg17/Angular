// eslint.config.js
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import angularEslintPlugin from '@angular-eslint/eslint-plugin';

export default [
  {
    files: ['*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      '@angular-eslint': angularEslintPlugin
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      '@typescript-eslint/indent': ['error', 2],
    },
  },
  {
    files: ['*.html'],
    rules: {
      // optional: some HTML lint rules if you want
    },
  },
];
