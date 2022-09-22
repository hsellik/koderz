import * as path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [vue(), svgLoader()],
  base: "./",
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
