// import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { defineConfig } from '@rondymesquita/splendid';
import { defineConfig } from '../lib/src';

// https://vitejs.dev/config/
export default defineConfig({
  splendid: {
    fulano: 'rondy',
  },
  plugins: [react()],
  // plugins: [react(), slidePlugin()],
});
