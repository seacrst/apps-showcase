import path from "node:path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      src: '/src',
      assets: '/src/assets',
      components: '/src/components',
      routes: '/src/routes'
    }
  },
  css: {
    preprocessorOptions: {
      styl: {
        paths: [path.resolve(__dirname, "src")],

      },
    },
  },
})
