import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Si vas a usar un dominio personalizado (ej. tecsm.com.mx), base debe ser '/'. 
  // Si vas a usar el subdominio gratuito de GitHub (ej. jorgesm030407.github.io/tecs2/), 
  // cambia la base a: '/tecs2/'
  base: '/tecsm/',
  server: {
    port: 3000,
  }
})
