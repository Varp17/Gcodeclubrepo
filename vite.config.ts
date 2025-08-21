import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@data': '/src/data',
      '@lib': '/src/lib'
    }
  }
})