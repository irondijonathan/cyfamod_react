import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],



  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js', // Customize the format of the output file names
      },
    },
  },

  // Add an afterBuild hook to delete the specific file after the build
  // You can adjust the pattern according to the filename that you want to delete
  afterBuild: () => {
    const filesToDelete = glob.sync('dist/assets/*.js', {
      ignore: ['dist/assets/*.css', 'dist/index.html'], // Exclude other files you don't want to delete
    });

    filesToDelete.forEach((file) => {
      if (!file.includes('index-')) {
        fs.unlinkSync(file);
      }
    });
  },
})
