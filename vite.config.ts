import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        faq: path.resolve(__dirname, 'faq.html'),
        changelog: path.resolve(__dirname, 'changelog.html'),
        privacy: path.resolve(__dirname, 'privacy.html'),
      },
    },
  },
})