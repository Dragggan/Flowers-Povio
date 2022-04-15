<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Modal from "@/components/Modal.vue";
import { modalStore } from "./stores/modal";

const openModal = (type: string): void => {
  let isModalOpen = modalStore();
  isModalOpen.openModal(type);
};
</script>

<template>
  <nav class="flex justify-around items-center content-center h-20" :style="{ border: 'solid black 1px' }">
    <div>
      <img src="./assets/images/old.png" alt="Flowr Logo" />
    </div>
    <div>
      <RouterLink to="/"><span class="text-custom-1 font-color mx-3">Flowers</span></RouterLink>
      <RouterLink to="/latestsightings"><span class="font-color mx-3">Latest Sightings</span></RouterLink>
      <RouterLink to="/favorites"><span class="font-color mx-3">Favorites</span></RouterLink>
      <button v-if="true" class="text-pink-button mx-3" @click="openModal('loginModal')">Login</button>
      <button v-if="true" class="bg-pink-button hover:pink-button-hover text-white rounded-2xl py-2 px-4 mx-3">
        New Account
      </button>
    </div>
  </nav>
  <RouterView />
  <component :is="Modal" :type="activeModal" :isOpen="isOpen"></component>
</template>
<style>
@import "@/assets/base.css";
@import "@/assets/reset.css";
body {
  background-color: black !important;
}
</style>
