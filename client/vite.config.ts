import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    port: parseInt(process.env.VITE_PORT || "") || 5172,
    strictPort: true,
  },
});
