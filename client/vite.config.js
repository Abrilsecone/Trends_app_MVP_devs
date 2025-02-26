import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/Trends_app_MVP",
  plugins: [react()],
  css: {
    modules: true,
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "./src/assets/Logo.svg",
      },
    },
  },
});
