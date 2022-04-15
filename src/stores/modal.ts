import { defineStore } from "pinia";

export const modalStore = defineStore({
  id: "modal",
  state: () => ({
    loginModal: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    openModal(type: string) {
      this.loginModal = true;
    },
    setModalClose() {
      this.loginModal = false;
    },
  },
});
