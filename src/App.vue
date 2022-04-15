<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { modalStore } from "./stores/modal";
import { storeToRefs } from "pinia";
import { authStore } from "./stores/authStore";
import Modal from "@/components/Modal.vue";

const auth = authStore();
const { tokenGetter } = storeToRefs(auth);

const openModal = (): void => {
  let isModalOpen = modalStore();
  isModalOpen.isModalOpen();
};

onMounted(() => {
  let token: string | null = localStorage.getItem("token");
  if (token) {
    auth.setTokenFromLocalStorage(token);
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
    <div>
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
        v-if="!tokenGetter"
        class="text-pink-button mx-3"
        @click="openModal()"
      >
        Login
      </button>
      <button
        v-if="!tokenGetter"
        class="bg-pink-button hover:pink-button-hover text-white rounded-2xl py-2 px-4 mx-3"
      >
        New Account
      </button>
      <div v-else></div>
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
