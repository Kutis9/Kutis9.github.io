import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // GitHub Pages base path - using relative paths for better compatibility
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // GitHub Pages MIME type fix
    rollupOptions: {
      output: {
        // Ensure chunks have .js extension for GitHub Pages
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          // Split vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          motion: ['motion/react']
        }
      }
    },
    // Additional build options for GitHub Pages compatibility
    target: 'es2015',
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1500,
  },
  // Development server config
  server: {
    fs: {
      strict: false
    }
  }
})
