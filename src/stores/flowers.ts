import { defineStore } from "pinia";
import axios, { type AxiosResponse } from "axios";

interface FlowersApi {
  flowers: [] | null;
  error?: string | null;
  searchFlowers: string;
  loading: boolean;
}

export const flowersStore = defineStore({
  id: "flowersStore",
  state: (): FlowersApi => ({
    flowers: [],
    error: null,
    loading: false,
    searchFlowers: "",
  }),
  getters: {
    getAllFlowers: (state) => state.flowers,
  },
  actions: {
    async getFlowers() {
      let response: AxiosResponse<any, any> | undefined;
      try {
        this.loading = true;
        response = await axios.get(
          `${import.meta.env.VITE_BASIC_PATH}/flowers`
        );
        this.flowers = response?.data.flowers;
      } catch (error) {
        this.error = error as string;
      } finally {
        this.loading = false;
      }
    },

    async flowerSearch(value: string) {
      let response: AxiosResponse<any, any> | undefined;
      try {
        this.loading = true;
        response = await axios.get(
          `${import.meta.env.VITE_BASIC_PATH}/flowers/search`,
          { params: { query: value } }
        );
        this.flowers = [];
        this.flowers = response?.data.flowers;
      } catch (error) {
        this.error = error as string;
      } finally {
        this.loading = false;
      }
    },
  },
});
