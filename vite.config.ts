import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { intlayerPlugin } from 'vite-intlayer';

export default defineConfig({
  plugins: [react(), intlayerPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});