// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// import { splendid } from '@rondymesquita/splendid';
import { splendid } from '../lib/src';

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   sourcemap: false,
  // },
  // splendid: {
  //   fulano: 'rondy',
  // },
  plugins: [
    react({ include: /\.(js|jsx|ts|tsx|md|css)$/, }),
    splendid(),
  ],
  server: { port: 5173, },
});
