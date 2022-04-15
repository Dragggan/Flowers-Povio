<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { modalStore } from "./stores/modal";
import { storeToRefs } from "pinia";
import { formStore } from "./stores/formStore";
import Modal from "@/components/Modal.vue";

const form = formStore();
const { tokenGetter } = storeToRefs(form);
const openModal = (): void => {
  let isModalOpen = modalStore();
  isModalOpen.isModalOpen();
};

onMounted(() => {
  let token: string | null = localStorage.getItem("token");
  if (token) {
    form.setTokenFromLocalStorage(token);
  }
});
</script>

<template>
  <Modal />
  <nav
    class="flex justify-around items-center content-center h-20"
    :style="{ border: 'solid black 1px' }"
  >
    <div class="flex justify-center content-center absolute">
      <img src="./assets/images/old.png" alt="Flowr Logo" />
    </div>
    <div class="modal_container"></div>
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
        @click="openModal('loginModal')"
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
  <!-- <RouterView /> -->
</template>
<style>
@import "@/assets/reset.css";
body {
  background-color: white !important;
}
</style>
