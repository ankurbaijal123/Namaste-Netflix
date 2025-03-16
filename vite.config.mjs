import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import dotenv from 'dotenv'
// Load environment variables
export default defineConfig(async () => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  define: {
    'process.env': {} // Ensure process.env is not exposed
  }
}));
