import { defineStore } from "pinia";

export const modalStore = defineStore({
  id: "modal",
  state: () => ({
    modal: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    isModalOpen() {
      this.modal = !this.modal;
    },
    isModalClosed() {
      this.modal = false;
    },
  },
});
