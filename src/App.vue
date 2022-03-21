<template>
  <header>
    <h1>Blur<span>dle</span></h1>
  </header>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main @click="handleClick">
    <div
      id="game"
      v-bind:level="level"
      style="background-image: url(./jamie.jpeg)"
    ></div>
  </main>
  <footer>
    <vue3-simple-typeahead
      id="typeahead_id"
      :placeholder="searchPlaceholder"
      :items="search"
      :minInputLength="1"
      @selectItem="selectItemEventHandler"
    >
    </vue3-simple-typeahead>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSearchStore } from "./stores/search";

function selectItemEventHandler(e) {
  if (e === "Jamie East") {
    alert("You found Jamie East");
  } else {
    level.value++;
    // console.log("ff", item)
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.querySelector("#typeahead_id").value = "";
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document
        .querySelector("#typeahead_id")
        .setAttribute("placeholder", `🔎 No, not ${e} Try again`);
    }, 10);

    searchPlaceholder = "Search for Jamie East";
  }
}
let item;
let searchPlaceholder = "🔎 Search";

// const list = await fetch("./search.json")
//     .then(response => response.json())
//     .then(json => json);

let search = useSearchStore().items.map((item) => item.name);
// console.log("ff",list, list);
// let search = []
// fetch("./search.json")
//     .then(response => response.json())
//     .then(json => json)
//     .then(json => {
//       console.log(json)
//       search = json})
// let list = ref(search)
// search = fetch("./search.json")
//     .then(response => response.json())
//     .then(json => json)
let level = ref(1);

function handleClick(e) {
  console.log(this);
  level.value++;
}
function blurEventHandler(e) {
  // console.log(aa, this)
  // debugger;
  console.log("blurEventHandler", e);
}
</script>

<style>
@import "./assets/base.css";
</style>
