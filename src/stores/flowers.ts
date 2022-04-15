import { defineStore } from "pinia";
import axios from "axios";

interface FlowersApi {
  flowers: [] | null;
  error?: string | null;
  loading: boolean;
}

export const flowersStore = defineStore({
  id: "flowersStore",
  state: (): FlowersApi => ({
    flowers: [],
    error: null,
    loading: false,
  }),
  getters: {
    getAllFlowers: (state) => state.flowers,
  },
  actions: {
    async getFlowers() {
      try {
        this.loading = true;
        const response = await axios.get(`${import.meta.env.VITE_BASIC_PATH}/flowers`);
        this.flowers = response.data.flowers;
        console.log("%c  data flowers==> ", "color:yellow;font-size:12px;", this.flowers);
      } catch (error) {
        console.log("%c  error==> ", "color:red;font-size:12px;", error);
        this.error = error as string;
      } finally {
        this.loading = false;
      }
    },
  },
});
