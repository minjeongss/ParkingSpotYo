// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react'
// eslint-disable-next-line import/no-extraneous-dependencies
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://openapi.seoul.go.kr:8088',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  define: {
    __APP_ENV: process.env.VITE_VERCEL_ENV,
  },
})
