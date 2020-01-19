import { writable } from "svelte/store";

export const posts = writable({
  0: {
    done: false,
    title: "Hello"
  },
  1: {
    done: true,
    title: "World"
  }
});
