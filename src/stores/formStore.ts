import { defineStore } from "pinia";

export const formStore = defineStore({
  id: "formStore",
  state: () => ({
    name: "",
    lastname: "",
    date: "",
    email: "",
    password: "",
  }),
  getters: {},
});
