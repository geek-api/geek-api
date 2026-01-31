import anyConfig from 'eslint-config-any';
import nextTsConfig from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  ...anyConfig.react,
  ...nextTsConfig,
  globalIgnores([
    '.next/**',
    'next-env.d.ts',
    'node_modules/**',
    'build/**',
    'dist/**',
    'out/**',
    'README.md',
  ]),
]);
