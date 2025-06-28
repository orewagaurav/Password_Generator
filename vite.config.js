import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://vite.dev/config/
export default defineConfig({
    // base: "/Password_Generator/",
    
  base: isGitHubPages ? '/Password_Generator/' : '/',
  plugins: [react(),tailwindcss()],
})
