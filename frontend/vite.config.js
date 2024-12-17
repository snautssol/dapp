import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Asegura que la raíz es el directorio del frontend
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'public/index.html' // Asegura que Vite busca index.html en public
    }
  }
});
