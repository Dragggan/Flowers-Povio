import { defineStore } from "pinia";
import { authStore } from "../stores/authStore";
import axios from "axios";

export const formStore = defineStore({
  id: "formStore",
  state: () => ({
    name: "",
    lastname: "",
    date: "",
    email: "",
    password: "",
    error: "",
    // token: "",
  }),
  getters: {},
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
        // this.token = response.data.auth_token;
        const auth = authStore();
        auth.settokentest(response.data.auth_token);
        localStorage.setItem("token", response.data.auth_token);
      } catch (error) {
        this.error = error as string;
      }
      // return this.token;
    },
  },
});
