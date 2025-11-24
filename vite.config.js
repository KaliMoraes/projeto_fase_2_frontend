import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the repository name for GitHub Pages
export default defineConfig({
  base: '/projeto_fase_2_frontend/',
  plugins: [react()],
})
