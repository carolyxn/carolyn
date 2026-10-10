import { defineConfig } from 'vite'

// Relative base so the build works on any GitHub Pages project URL (/<repo>/).
export default defineConfig({
  base: './',
  server: { host: '0.0.0.0', port: 43127, strictPort: true },
  preview: { host: '0.0.0.0', port: 43128, strictPort: true },
})
