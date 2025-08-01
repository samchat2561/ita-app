import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  server: {
    allowedHosts: [
      'localhost',
      '202.29.230.21',
      'www.trattc.ac.th' // Add the specific host here
    ],
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3008,
  }

})
