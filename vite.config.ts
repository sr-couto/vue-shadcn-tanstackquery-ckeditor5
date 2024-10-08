import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite'
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [vue(), Icons(), vueDevTools()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
