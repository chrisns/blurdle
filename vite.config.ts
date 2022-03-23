import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import vueJsx from "@vitejs/plugin-vue-jsx";
import vuetify from "@vuetify/vite-plugin";
// import { vuetify } from "vuetify";
// const vuetify = createVuetify();
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
