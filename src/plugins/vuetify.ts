import "vuetify/styles";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi-svg";

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
