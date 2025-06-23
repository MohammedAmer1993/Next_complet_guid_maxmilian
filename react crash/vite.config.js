import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 👇 This line is the key to SPA fallback
    fs: {
      allow: ["."],
    },
    historyApiFallback: true, // 👈 This tells Vite to fallback to index.html
  },
});
