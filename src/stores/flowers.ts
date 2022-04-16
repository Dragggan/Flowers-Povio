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
      } catch (er) {
        this.error = er.response.data.error as string;
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
      } catch (er) {
        this.error = er.response.data.error as string;
      } finally {
        this.loading = false;
      }
    },
    async setAsFavorite(flower_id: string) {
      let response: AxiosResponse<any, any> | undefined;
      try {
        this.loading = true;
        response = await axios.post(
          `${import.meta.env.VITE_BASIC_PATH}/flowers/${flower_id}/favorites`
          // TO BE CONTINUED... 401 "Not authorized", read from token user id...
          // {
          //   id: flower_id,
          //   user_id: 0,
          //   flower: {
          //     id: 0,
          //     name: "string",
          //     latin_name: "string",
          //     sightings: 0,
          //     profile_picture: "string",
          //     favorite: true,
          //   },
          // }
        );
      } catch (er) {
        this.error = er.response.data.error as string;
      } finally {
        this.loading = false;
      }
    },
  },
});
