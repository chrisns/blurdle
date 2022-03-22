<template>
  <v-app>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-text>{{ message }} </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <header>
      <h1>Blur<span>dle</span></h1>
    </header>
    <main>
      <div
        id="game"
        :level="level"
        style="background-image: url(./jamie.jpeg)"
      ></div>
    </main>
    <footer>
      <v-container>
        <v-row id="level" :level="level">
          <v-col
            class="rounded border-sm"
            v-for="index in 6"
            :key="index"
            cols="2"
          ></v-col>
        </v-row>
        <v-row>
          <v-col cols="11">
            <v-autocomplete
              id="search"
              :items="items"
              dense
              placeholder="🔎 Search"
              no-details
              no-data-text="No results found"
              @update:modelValue="selectItemEventHandler"
              cache-items
            ></v-autocomplete>
          </v-col>
          <v-col cols="1">
            <v-btn
              icon="mdi-redo"
              color="primary"
              @click="incrementLevel"
            ></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSearchStore } from "./stores/search";

function selectItemEventHandler(e) {
  if (e === "Jamie East") {
    msg("You found Jamie East");
  } else {
    incrementLevel();
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.querySelector("#search").value = "";
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document
        .querySelector("#search")
        .setAttribute("placeholder", `🔎 No, not ${e} Try again`);
    }, 1);
  }
}
function incrementLevel() {
  if (level.value === 6) msg("It was Jamie East!");
  else
  level.value++;
}

let level = ref(1);
import search from "./stores/searchdb.json";
const items = search.map((item) => item.name);

function msg(text) {
  message.value = text;
  dialog.value = true;
}

let dialog = ref(false);
let message = ref();
</script>
