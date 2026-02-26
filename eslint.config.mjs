import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off',
      semi: 'error',
      'react-hooks/exhaustive-deps': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-unused-vars': 'off',
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      '@typescript-eslint/no-var-requires': 'off',
      eqeqeq: ['error', 'always'],
    },
  },
    globalIgnores([
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      '**/*.css',
    ]),
]);

export default eslintConfig;
