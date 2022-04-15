import { defineStore } from "pinia";
import axios from "axios";

export const formStore = defineStore({
  id: "formStore",
  state: () => ({
    name: "Test Dragan`",
    lastname: "aadaaaa",
    date: "22/09/1987",
    email: "dfhfghjfghggfd@gmail.com",
    password: "12345677d88",
    error: "",
    token: "",
  }),
  getters: {
    tokenGetter: (state) => state.token,
  },
  actions: {
    async createAccount() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASIC_PATH}/users/register`,
          {
            email: this.email,
            password: this.password,
            first_name: this.name,
            last_name: this.lastname,
            date_of_birth: this.date,
          }
        );
        this.token = response.data.auth_token;
        localStorage.setItem("token", response.data.auth_token);
      } catch (error) {
        this.error = error as string;
      }
    },
    setTokenFromLocalStorage(data: string) {
      this.token = data;
    },
  },
});
