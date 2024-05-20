/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: 'app/helpers/setupTests.ts',
    environment: 'jsdom',
    coverage: {
      include: ['app/ui/**/*.{ts,tsx}', 'app/helpers/**/*.{ts,tsx}'],
      exclude: ['app/helpers/setupTests.ts'],
      reporter: ['html', 'text-summary'],
      thresholds: {
        functions: 50,
        lines: 50,
        branches: 50,
        statements: 50,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app'),
    },
  },
})