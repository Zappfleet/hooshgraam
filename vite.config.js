import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // پوشه خروجی
    rollupOptions: {
      input: {
        main: 'index.html', // صفحه اصلی پروژه
      },
    },
  },
})
