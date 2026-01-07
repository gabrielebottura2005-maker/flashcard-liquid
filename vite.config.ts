import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Flashcards',
        short_name: 'Flashcards',
        start_url: '/',
        display: 'standalone',
        background_color: '#05070A',
        theme_color: '#05070A',
        icons: [
          { src: '/icon.svg', sizes: '512x512', type: 'image/svg+xml' }
        ]
      }
    })
  ]
})
