import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Ini memaksa Vite untuk mengecek ekstensi jika kamu lupa menulisnya
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    // Memastikan folder outputnya sesuai standar Vercel
    outDir: 'dist',
  }
})
