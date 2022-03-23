<template>
  <v-toolbar>
    <v-btn>
      <v-icon :icon="icons.mdiMenu" />
      <v-dialog v-model="aboutdialog" activator="parent">
        <v-card>
          <v-card-text>
            <v-card-title>About</v-card-title>
            TODO: Put some text that describes who we are
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary"
              >Privacy Policy
              <v-dialog v-model="privacypolicy" activator="parent">
                <v-card>
                  <v-card-title>Privacy Policy</v-card-title>
                  <v-card-text> TODO: Put Privacy Policy here </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" @click="privacypolicy = false"
                      >OK!</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-btn>
            <v-btn color="primary" @click="aboutdialog = false">OK!</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
    <v-btn>
      <v-icon :icon="icons.mdiHelpCircleOutline" />

      <v-dialog v-model="helpdialog" activator="parent">
        <v-card>
          <v-card-text>
            TODO: put some better text in here that explains how to play
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="click = false">OK!</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>

    <v-spacer></v-spacer>

    <h1>Blur<span>dle</span></h1>

    <v-spacer></v-spacer>
        <v-btn>
    <v-icon :icon="icons.mdiEqualizerOutline" />

    </v-btn>


  </v-toolbar>
</template>

<script>
import * as icons from "@mdi/js";

export default {
  // emits: ['click'],
  properties: {
    click: {
      type: Function,
      default: false
    }
  },
  data() {
    return {
      icons,
      privacypolicy: false,
      aboutdialog: false,
      helpdialog: false,
    };
  },
};
</script>
