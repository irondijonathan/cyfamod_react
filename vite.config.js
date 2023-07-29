import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlPlugin from '@rollup/plugin-html'; // Import the htmlPlugin


export default defineConfig({
  plugins: [
    react(),
    htmlPlugin({
      inject: {
        injectData: {
          // Add script tags for your animation scripts here
          scripts: [
            { src: '/src/js/jquery.min.js', type: 'module' },
            { src: '/src/js/plugins.js', type: 'module' },
            { src: '/src/js/scripts.js', type: 'module' },
          ],
        },
      },
    }),
  ],

  build: {
    outDir: 'dist', // Set the output directory for the production build
  },
  rollupOptions: {
    input: {
      main: './index.html',
    },
  },
})
