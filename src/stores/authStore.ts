import { defineStore } from "pinia";

interface authStore {
  token: string | null;
  isLogedIn: boolean;
}

export const authStore = defineStore({
  id: "authStore",
  state: (): authStore => ({
    token: null,
    isLogedIn: false,
  }),
  getters: {
    tokenGetter: (state) => state.token,
  },
  actions: {
    setToken(data: string | null) {
      this.token = data;
    },
    setIsLogedIn(value: boolean) {
      this.isLogedIn = value;
    },
    clearStore() {
      this.token = null;
      this.isLogedIn = false;
    },
  },
});
