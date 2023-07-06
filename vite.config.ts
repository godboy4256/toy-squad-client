import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  resolve: {
    alias: [
      { find: '@utils', replacement: '/src/utils' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@recoil', replacement: '/src/recoil' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@component', replacement: '/src/component' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@', replacement: '/src' },
    ],
  },
});
