import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Base para servir desde WAMP: localhost/proyectos/checkcar/
  base: '/proyectos/checkcar/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
