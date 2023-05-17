import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/UI': '/src/components/UI',
      '@/pages': '/src/pages',
      '@/components': '/src/components/index.ts',
      '@/utils' : '/src/utils',
      '@/static' : '/src/static'
    }
  },
  server: {
    port: 3000
  },
});
