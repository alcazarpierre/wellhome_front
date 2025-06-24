// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr'; // Mantén este si lo usas para importar SVGs como componentes


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(), // Si usas vite-plugin-svgr, debe ir ANTES de @vitejs/plugin-react
    react(),
    // LÍNEA ELIMINADA: tailwindcss(), // Esta línea también debe desaparecer
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,wasm}'],
      },
      manifest: {
        name: 'Wellhome App',
        short_name: 'Wellhome',
        description: 'Administración de condominios y viviendas',
        theme_color: '#2563EB',
        background_color: '#FFFFFF',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});