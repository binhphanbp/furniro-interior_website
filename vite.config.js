import { defineConfig } from 'vite';
import htmlInject from 'vite-plugin-html-inject';
import path from 'path';

export default defineConfig({
  plugins: [htmlInject()],
  root: '.',
  publicDir: 'public',
  server: {
    open: '/index.html',
  },
});
