import MillionLint from '@million/lint';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import tsconfigPaths from 'vite-tsconfig-paths'
import RemixRouter from 'vite-plugin-remix-router'

import 'dotenv/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    MillionLint.vite({
      enabled: true
    }),
    react(),
    tsconfigPaths(),
    RemixRouter()
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    port: parseInt(process.env.VITE_PORT) || 3001
  }
})
