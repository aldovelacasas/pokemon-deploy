import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:5173,
    open:"/"
  }
})
console.log("escuchand0 en el puerto 3000");
