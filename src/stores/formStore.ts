import { defineStore } from "pinia";
import { authStore } from "../stores/authStore";
import axios, { type AxiosResponse } from "axios";

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
    async createAccount(type: string) {
      let response: AxiosResponse<any, any> | undefined;
      try {
        // ---------------------register --------------------
        if (type === "createAccountModal") {
          response = await axios.post(
            `${import.meta.env.VITE_BASIC_PATH}/users/register`,
            {
              email: this.email,
              password: this.password,
              first_name: this.name,
              last_name: this.lastname,
              date_of_birth: this.date,
            }
          );
          const auth = authStore();
          auth.setToken(response?.data.auth_token);
          localStorage.setItem("token", response?.data.auth_token);
          alert(
            "Congratulations! You have successfully signed up for FlowrSpot!"
          );
        }
        // --------------login --------------------------
        else if (type === "loginModal") {
          response = await axios.post(
            `${import.meta.env.VITE_BASIC_PATH}/users/login`,
            {
              email: this.email,
              password: this.password,
            }
          );
          alert(
            "Congratulations! You have successfully logged into FlowrSpot!"
          );
        }
      } catch (error) {
        this.error = error as string;
      }
    },
  },
});
