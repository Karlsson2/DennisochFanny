import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true, // Enable source maps for debugging
    minify: false, // Disable minification to isolate errors
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Split large dependencies into a separate chunk
          }
        },
      },
    },
  },
});
