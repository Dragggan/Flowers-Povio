<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { computed, onMounted } from "vue";
import { modalStore } from "./stores/modal";
import { authStore } from "./stores/authStore";
import Modal from "@/components/Modal.vue";

const auth = authStore();

// open modal and set type of modal
const openModal = (type: string, value: boolean): void => {
  let isModalOpen = modalStore();
  isModalOpen.typeOfModal(type);
  isModalOpen.isModalOpen(type, value);
};

const isLoginUser = computed(() => {
  return auth.isLogedIn;
});

// copy token from local storage if exist, flag to determine if the user logged in
onMounted(() => {
  let token: string | null = localStorage.getItem("token");
  let isLogedIn: string | null = localStorage.getItem("isLogedIn");
  if (token) {
    auth.setToken(token);
  }
  if (isLogedIn) {
    auth.setIsLogedIn(isLogedIn);
  }
});
</script>

<template>
  <Modal />
  <nav
    class="flex justify-between m-auto items-center content-center h-20 custom-width"
  >
    <div>
      <img src="./assets/images/old.png" alt="Flowr Logo" />
    </div>
    <div class="flex grow-1 items-center">
      <RouterLink to="/"
        ><span class="text-custom-1 font-color mx-3">Flowers</span></RouterLink
      >
      <RouterLink to="/latestsightings"
        ><span class="font-color mx-3">Latest Sightings</span></RouterLink
      >
      <RouterLink to="/favorites"
        ><span class="font-color mx-3">Favorites</span></RouterLink
      >
      <button
        v-if="!isLoginUser"
        class="text-pink-button mx-3 hover:text-pink-button-hover"
        @click="openModal('loginModal', true)"
      >
        Login
      </button>
      <div
        class="flex items-center hover:cursor-pointer"
        v-else
        @click="openModal('profileModal', true)"
      >
        <p class="mr-1">Jon Doe</p>
        <img class="" src="./assets/images/avatar.png" alt="avatar of user" />
      </div>
      <button
        v-if="!isLoginUser"
        @click="openModal('createAccountModal', true)"
        class="bg-pink-button hover:bg-pink-button-hover text-white rounded-2xl py-2 px-4 mx-3"
      >
        New Account
      </button>
    </div>
  </nav>
  <RouterView />
</template>
<style>
@import "@/assets/reset.css";
body {
  background-color: white !important;
}
.custom-width {
  width: 64.6%;
}
</style>
