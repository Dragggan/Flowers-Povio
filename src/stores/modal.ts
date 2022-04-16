import { defineStore } from "pinia";

interface modalStore {
  createAccountModal: boolean;
  loginModal: boolean;
  profileModal: boolean;
  modalType: string;
}

export const modalStore = defineStore({
  id: "modal",
  state: (): modalStore => ({
    createAccountModal: false,
    loginModal: false,
    profileModal: false,
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
      this[index] = value;
    },
    isModalClosed() {
      this.loginModal = false;
      this.createAccountModal = false;
      this.profileModal = false;
    },
  },
});
