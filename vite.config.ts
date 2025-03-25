import path, { dirname } from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// these are necessary to fix issues while running Cypress tests (https://stackoverflow.com/a/64383997)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@cypress": path.resolve(__dirname, "./cypress"),
      "@core": path.resolve(__dirname, "./lib/core/src"),
      "@gds": path.resolve(__dirname, "./lib/gds"),
      "@hooks": path.resolve(__dirname, "./lib/hooks"),
      "@icons": path.resolve(__dirname, "./lib/icons/components"),
      "@ui": path.resolve(__dirname, "./lib/ui"),
      "@utils": path.resolve(__dirname, "./lib/utils"),
    },
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: "[folder]-[name]-[local]-[hash:base64:5]",
      hashPrefix: "prefix",
    },
  },
  server: {
    open: true,
    port: 3000,
    host: true,
  },
  build: {
    outDir: "build",
    rollupOptions: {
      external: [/fonts/, /images/],
    },
  },
});
