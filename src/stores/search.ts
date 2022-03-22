import { defineStore } from "pinia";
import { search } from "./searchdb";
export const useSearchStore = defineStore({
  id: "search",
  state: () => {
    return {
      items: search,
    };
  },
});
