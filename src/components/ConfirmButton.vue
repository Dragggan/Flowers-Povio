<template>
  <button
    :disabled="isDisabled"
    type="button"
    class="w-full justify-center px-4 py-2 text-sm font-medium text-white bg-pink-button hover:bg-pink-button-hover border border-transparent rounded-md focus:outline-none focus-visible:ring-2"
    :class="{
      'bg-gray-200': isDisabled,
      'hover:bg-gray-200': isDisabled,
      'cursor-not-allowed': isDisabled,
    }"
    @click="confirm(modal.modalTypeGetter)"
  >
    {{ headline }}
  </button>
</template>

<script setup>
import { computed } from "vue";
import { formStore } from "../stores/formStore.ts";
import { modalStore } from "../stores/modal.ts";
import { authStore } from "../stores/authStore.ts";

const form = formStore();
const modal = modalStore();
const auth = authStore();

// headline of the button
const headline = computed(() => {
  const headline = {
    loginModal: "Login to your Account",
    createAccountModal: "Create Account",
    profileModal: "Logout",
  };
  return headline[modal.modalTypeGetter];
});

// all fields are mandatory/or just email and password, based on type of modal
// logout is always enabled
const isDisabled = computed(() => {
  const { name, lastname, password, email, date } = form;
  if (modal.modalType === "createAccountModal") {
    return !(name && lastname && password && email && date);
  } else if (modal.modalType === "loginModal") {
    return !(password && email);
  }
  return false;
});

// create/login/logut button
const confirm = (type) => {
  if (type === "profileModal") {
    localStorage.clear();
    modal.isModalOpen("profileModal", false);
    modal.typeOfModal("");
    auth.clearStore();
  } else {
    form.setAccount(type);
  }
};
</script>
