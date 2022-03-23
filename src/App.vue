<template>
  <v-app>
    <app-header @click="scoreStore.reset"></app-header>
    <app-game :level="level" :image="today.image" :name="today.name"></app-game>

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
            <v-btn icon="mdi-redo" @click="incrementLevel"></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { useSearchStore } from "./stores/search";
import { useScoreStore } from "./stores/scoreStore";
import AppHeader from "./components/AppHeader.vue";
import AppGame from "./components/AppGame.vue";
const scoreStore = useScoreStore()
function selectItemEventHandler(e) {
  if (e === today.name) {
    alert(`You found ${today.name}!`);
    level.value = 6;
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
  if (level.value <= 6) level.value++;
  scoreStore.upsertScore(day.value, level.value);
  console.log(scoreStore.getScore(day))
  // scoreStore.reset()
}


import search from "./stores/searchdb.json";
let day = ref(0)

let level = ref(scoreStore.getScore(day.value));

let today = search[day.value];
const items = search.map((item) => item.name);
</script>
