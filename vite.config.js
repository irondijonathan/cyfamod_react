import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Set the output directory for the production build
  },
  rollupOptions: {
    input: {
      main: './index.html',
      script1: './src/js/jquery.min.js',
      script2: './src/js/plugins.js',
      script3: './src/js/scripts.js',
    },
  },
})
