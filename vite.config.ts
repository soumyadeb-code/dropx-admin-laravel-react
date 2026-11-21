import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'resources/js'),
      'next/link': resolve(__dirname, 'resources/js/shims/next-link.tsx'),
      'next/navigation': resolve(__dirname, 'resources/js/shims/next-navigation.tsx'),
      'next/image': resolve(__dirname, 'resources/js/shims/next-image.tsx'),
      'next-themes': resolve(__dirname, 'resources/js/shims/next-themes.tsx'),
      'next': resolve(__dirname, 'resources/js/shims/next.ts'),
    },
  },
  plugins: [
    laravel({
      input: ['resources/css/globals.css', 'resources/js/main.tsx'],
      refresh: true,
    }),
    react(),
  ],
  server: {
    host: 'localhost',
    port: 5173,
    hmr: {
      host: 'localhost',
    },
  },
});
