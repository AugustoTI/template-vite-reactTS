import { defineConfig } from 'vitest/config';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPath from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPath(), checker({ typescript: true })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup-tests.ts'],
  },
});
