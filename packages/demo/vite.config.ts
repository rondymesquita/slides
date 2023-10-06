// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react';

// import { splendid } from '@rondymesquita/splendid';
import { splendid } from '../lib/src';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  splendid: {
    fulano: 'rondy',
  },
  plugins: [react(), splendid()],
  server: {
    port: 5173,
  },
});
