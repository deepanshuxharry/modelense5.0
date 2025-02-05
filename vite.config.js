import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Configure server and proxy settings
  server: {
    proxy: {
      // Example: Proxy for assets if needed for development
      '/images': {
        target: 'https://cdn.sanity.io', // Sanity CDN URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/images/, ''),
      },
    },
  },

  // Define the build configurations
  build: {
    // You can use 'assetsInlineLimit' for assets larger than a specific size to be treated as URLs
    assetsInlineLimit: 4096,  // 4KB default, adjust to your needs
  },

  // Optionally, if you need to import external assets in the components
  optimizeDeps: {
    include: ['@sanity/client'], // Include sanity client if you need it for queries
  },
});

