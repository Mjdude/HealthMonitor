import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  root: '.',
  publicDir: 'public',
  base: './', // Add this for proper asset paths
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true, // Enable source maps for better debugging
    rollupOptions: {
      input: 'index.html',
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['react-router-dom', 'styled-components']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase chunk size warning limit
  },
  // Add this for Vercel deployment
  define: {
    'process.env': {}
  }
})
