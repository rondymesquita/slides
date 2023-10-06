import react from '@vitejs/plugin-react';
// import { defineConfig } from '@rondymesquita/splendid';
import { defineConfig } from '../lib/src';

// https://vitejs.dev/config/
export default defineConfig({
  splendid: {
    fulano: 'rondy',
  },
  plugins: [
    react({
      include: ['*/.*md'],
    }),
  ],
  server: {
    port: 5173,
  },
  // plugins: [react(), slidePlugin()],
});
