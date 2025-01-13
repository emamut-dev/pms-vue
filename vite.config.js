import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), pluginRewriteAll()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
