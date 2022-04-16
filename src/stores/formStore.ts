import { modalStore } from "./modal";
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
  }),
  getters: {},
  actions: {
    async createAccount(type: string) {
      let response: AxiosResponse<any, any> | undefined;
      const auth = authStore();
      const modal = modalStore();

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

          auth.setToken(response?.data.auth_token);
          localStorage.setItem("token", response?.data.auth_token);
          alert(
            "Congratulations! You have successfully signed up for FlowrSpot!"
          );
          modal.typeOfModal("loginModal");
          modal.isModalOpen("createAccountModal", false);
          modal.isModalOpen("loginModal", true);
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
          localStorage.removeItem("token");
          localStorage.setItem("token", response?.data.auth_token);
          localStorage.setItem("isLogedIn", "true");
          modal.typeOfModal("profileModal");
          modal.isModalOpen("loginModal", false);
          modal.isModalOpen("profileModal", true);
        }
      } catch (error) {
        this.error = error as string;
      }
    },
  },
});
