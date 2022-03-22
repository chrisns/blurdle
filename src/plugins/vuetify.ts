import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "vuetify/styles"; // Global CSS has to be imported

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default createVuetify({
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
