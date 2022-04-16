import { modalStore } from "./modal";
import { defineStore } from "pinia";
import { authStore } from "../stores/authStore";
import axios, { type AxiosResponse } from "axios";

interface FormStore {
  name: string;
  lastname: string;
  date: string;
  email: string;
  password: string;
  error: string;
  loading: boolean;
}

export const formStore = defineStore({
  id: "formStore",
  state: (): FormStore => ({
    name: "",
    lastname: "",
    date: "",
    email: "",
    password: "",
    error: "",
    loading: false,
  }),
  actions: {
    async setAccount(type: string) {
      let response: AxiosResponse<any, any> | undefined;
      const auth = authStore();
      const modal = modalStore();

      try {
        this.loading = true;
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
          // replacing token
          localStorage.removeItem("token");
          localStorage.setItem("token", response?.data.auth_token);
          localStorage.setItem("isLogedIn", "true");

          auth.setToken(response?.data.auth_token);
          auth.setIsLogedIn(true);

          modal.typeOfModal("profileModal");
          modal.isModalOpen("loginModal", false);
          modal.isModalOpen("profileModal", true);
          this.clearStore();
        }
      } catch (er) {
        alert(er.response.data.error);
        this.error = er.response.data.error as string;
      } finally {
        this.loading = false;
      }
    },
    clearStore() {
      this.name = "";
      this.lastname = "";
      this.date = "";
      this.email = "";
      this.password = "";
      this.error = "";
    },
  },
});
