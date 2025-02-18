import { defineConfig } from 'eslint-define-config';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin'; // Заменено на правильный плагин
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig({
    overrides: [
        {
            files: ['**/*.{ts,tsx}'],
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: './',
            },
            languageOptions: {
                ecmaVersion: 2020,
                globals: globals.browser,
            },
            plugins: {
                '@typescript-eslint': tseslint,
                'react-hooks': reactHooks,
                'react-refresh': reactRefresh,
                'jsx-a11y': jsxA11y,
            },
            rules: {
                // 🟢 React & React Hooks
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'warn',
                'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

                // 🟢 TypeScript & Strict Rules
                '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-explicit-any': 'warn',
                '@typescript-eslint/no-non-null-assertion': 'warn',
                '@typescript-eslint/no-floating-promises': 'error',

                // 🟢 Код-стайл & Чистота кода
                'prettier/prettier': 'warn',
                'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
                'sort-imports': ['warn', { ignoreDeclarationSort: true, allowSeparatedGroups: true }],
                'no-console': 'warn',
                'jsx-a11y/anchor-is-valid': 'warn',
                'jsx-a11y/no-static-element-interactions': 'warn',
            },
        },
    ],
});
