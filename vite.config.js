import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/latihan-cicd/',
  test: {
    include: ['src/**/*.test.js'],
    exclude: ['backend/**', 'node_modules/**', 'dist/**'],
  },
});
