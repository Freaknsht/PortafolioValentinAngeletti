import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  //plugins para que se use tailwindcss
  plugins: [react(), tailwindcss()],
  base: 'https://freaknsht.github.io/PortafolioValentinAngeletti'
});
