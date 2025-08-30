import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss({
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}',
      ],
    }), 
    react(),
     
  ],
  resolve: {
    dedupe: ["react", "react-dom"], // ✅ ensure only one React is bundled
  },
})
