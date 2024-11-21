import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const base = mode === "production" ? "/dark-decibels-creative-hub/" : "/";
  
  // Log the mode and base path to the console
  console.log(`Vite is running in ${mode} mode`);
  console.log(`Using base path: ${base}`);
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    base: base,
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
  };
});
