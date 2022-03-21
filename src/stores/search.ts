import { defineStore } from "pinia";
// const search = require('./search.json')
import { search } from "./searchdb";
export const useSearchStore = defineStore({
  id: "search",
  state: () => {
    return {
      items: search,
    };
  },
  // ),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    // increment() {
    //   this.counter++
    // }
  },
});
