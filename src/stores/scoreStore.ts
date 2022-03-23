import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useScoreStore = defineStore({
  id: "main",
  state: () => ({
    // solves: useStorage("solves", []),
    scores: useStorage("scores", []),
  }),
  getters: {
    // scores() {
    //   return this.scores;
    // },
    // getAllScores() {
    //   return this.scores;
    // },
    // todoEmpty() {
    //   return this.todos.length <= 0;
    // },
  },
  actions: {
    upsertScore(day, score, solved = false) {
      // this.scores.push("1");
      // console.log("a", this.scores);
      // if (this.scores.length <= 0) this.scores.push(1);
      // this.scores[day] = score;
      this.scores.push({ day, score, solved });
    },
    // solved(day) {
    //   this.solves[day] = true;
    // },
    reset() {
      this.scores.forEach((score, i) => delete this.scores[i]);
      // debugger;
      // this.scores();
    },
    getScore(day) {
      return (
        this.scores.filter((score) => score && score.day === day).slice(-1)[0]
          ?.score || 1
      );
    },
    // addTodo(todo) {
    //   this.todos.push(todo);
    // },
    // removeTodo(index) {
    //   this.todos.splice(index, 1);
    // },
  },
});
