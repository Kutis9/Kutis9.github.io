import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Optimize images - convert to WebP and compress
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
      webp: { quality: 85 }
    }),
  ],
  // GitHub Pages base path - for user pages (kutis9.github.io) use root
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Faster than terser
    // Performance optimized rollup options
    rollupOptions: {
      output: {
        // Efficient chunking strategy
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['motion/react'],
          'ui-vendor': ['lucide-react']
        },
        // Ensure chunks have .js extension for GitHub Pages
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimized build options
    target: 'esnext', // Modern browsers for smaller bundles
    assetsInlineLimit: 2048, // Inline small assets (2KB limit)
    chunkSizeWarningLimit: 1000, // Warn about large chunks
    cssCodeSplit: true, // Split CSS for better caching
  },
  // Development server config
  server: {
    fs: {
      strict: false
    }
  },
  // Dependency optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'motion/react', 'lucide-react'],
    esbuildOptions: {
      target: 'esnext'
    }
  }
})
