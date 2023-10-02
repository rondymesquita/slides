import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { slidePlugin } from '@rondymesquita/slides'
import { slidePlugin } from '../lib/src';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), slidePlugin()],
});
