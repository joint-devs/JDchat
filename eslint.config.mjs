import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: [
      'docs/.astro/*',
      '**/node_modules/**',
      '**/dist/**',
      '**/webpack.config.js',
      '**/*.cy*',
      '**/*.po*',
      '**/commands.ts',
    ],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      //   'prettier': prettierPlugin,
      //   'jest': jestPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      //   ...jestPlugin.configs.recommended.rules,
      //   'prettier/prettier': [
      //     'error',
      //     {
      //       endOfLine: 'auto',
      //     },
      //   ],
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    ignores: ['**/vite.config.*.timestamp*', '**/vitest.config.*.timestamp*'],
  },
];
