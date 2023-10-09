import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FakeCompany/",
  plugins: [react(),
  webfontDownload()]
})
