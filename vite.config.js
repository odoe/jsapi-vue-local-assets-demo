import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 2000,
  },
  server: {
    open: true,
  },
  plugins: [
    copy({
      targets: [
        {
          src: "node_modules/@arcgis/core/assets/",
          dest: "public/",
          hook: "writeBundle",
        },
      ],
    }),
    vue(),
  ],
});
