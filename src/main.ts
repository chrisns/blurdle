import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "@/assets/base.scss";
import VueGtag from "vue-gtag";

import vuetify from "./plugins/vuetify";

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(VueGtag, {
  config: { id: "G-3YGKVETY1F" },
});

app.mount("#app");
