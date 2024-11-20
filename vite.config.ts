import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: mode === "production" ? "/dark-decibels-creative-hub/" : "/",
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["@floating-ui/react-dom"],  // Ensure it's included in the development build
  },
  build: {
    rollupOptions: {
      external: [],  // Do not exclude the package from bundling, include it in the build
    },
  },
}));