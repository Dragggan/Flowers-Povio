import { defineStore } from "pinia";

interface authStore {
  token: string | null;
}

export const authStore = defineStore({
  id: "authStore",
  state: (): authStore => ({
    token: null,
  }),
  getters: {
    tokenGetter: (state) => state.token,
  },
  actions: {
    settokentest(data: string | null) {
      this.token = data;
    },
    setTokenFromLocalStorage(data: string | null) {
      this.token = data;
    },
  },
});
