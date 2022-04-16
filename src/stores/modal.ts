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
      console.log("%c  type==> ", "color:red;font-size:12px;", type);
      this.modalType = type;
    },
    isModalOpen(type: string) {
      console.log("%c  type==> ", "color:red;font-size:12px;", type);
      this[type] = !this[type];
    },
    isModalClosed() {
      this.loginModal = false;
      this.createAccountModal = false;
    },
  },
});
