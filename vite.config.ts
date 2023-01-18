import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPath from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPath()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    exclude: [...configDefaults.exclude, 'test'],
    coverage: {
      enabled: true,
    },
  },
  server: {
    port: 3000,
  },
})
