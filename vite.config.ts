import * as path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: 'tailwind.config.js',
        replacement: path.resolve(__dirname, './tailwind.config.js'),
      },
    ],
  },
})
