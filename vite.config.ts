import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import path from "path";
// @ts-ignore
import OptimizationPersist from "vite-plugin-optimize-persist";
// @ts-ignore
import PkgConfig from "vite-plugin-package-config";

export default defineConfig({
  base: "./",
  plugins: [vue(), OptimizationPersist(), PkgConfig()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },

  build: {
    outDir: path.resolve(__dirname, "docs"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/_variables";
          @import "./src/assets/styles/_mixins";
        `,
      },
    },
  },
});
