import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";


export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./app"),
      "@components/*": path.resolve(__dirname, "./src/components/*"),
      "@custom_types/*": path.resolve(__dirname, "./src/custom_types/*"),
    },
  },
});
