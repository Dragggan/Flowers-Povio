import { defineStore } from "pinia";
import axios from "axios";

interface FlowersApi {
  flowers: [] | null;
}

export const flowersStore = defineStore({
  id: "flowersStore",
  state: (): FlowersApi => ({
    flowers: [],
  }),
  getters: {
    getAllFlowers: (state) => state.flowers,
  },
  actions: {
    async getFlowers() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASIC_PATH}/flowers`
        );
        this.flowers = response.data.flowers;
        console.log(
          "%c  data flowers==> ",
          "color:yellow;font-size:12px;",
          this.flowers
        );
      } catch (error) {
        console.log("%c  error==> ", "color:red;font-size:12px;", error);
      }
    },
  },
});
