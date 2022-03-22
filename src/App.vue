<template>
  <v-app>
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
            <v-btn icon="mdi-redo" color="primary"></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSearchStore } from "./stores/search";

function foo(e) {
  // debugger;
}

function selectItemEventHandler(e) {
  // alert("cc")
  console.log(e);
  if (e === "Jamie East") {
    alert("You found Jamie East");
  } else {
    level.value++;
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

let level = ref(1);
import search from "./stores/searchdb.json";
const items = search.map((item) => item.name);
</script>

<script lang="ts">
// export default {
//   data: () => ({
//     items: search.map((item) => item.name),
//   }),
// };
</script>
