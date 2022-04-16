import { defineStore } from "pinia";

interface modalStore {
  createAccountModal: boolean;
  loginModal: boolean;
  modalType: string;
}

export const modalStore = defineStore({
  id: "modal",
  state: (): modalStore => ({
    createAccountModal: false,
    loginModal: false,
    modalType: "",
  }),
  getters: {
    modalTypeGetter: (state) => state.modalType,
  },
  actions: {
    typeOfModal(type: string) {
      this.modalType = type;
    },
    isModalOpen(type: string, value: boolean) {
      this[type] = value;
    },
    isModalClosed() {
      this.loginModal = false;
      this.createAccountModal = false;
    },
  },
});
