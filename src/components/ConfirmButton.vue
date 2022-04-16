<template>
  <button
    :disabled="isDisabled"
    type="button"
    class="w-full justify-center px-4 py-2 text-sm font-medium text-white bg-pink-button hover:pink-button-hover border border-transparent rounded-md focus:outline-none focus-visible:ring-2"
    :class="{ 'bg-gray-200': isDisabled }"
    @click="confirm(modal.modalTypeGetter)"
  >
    {{ headline }}
  </button>
</template>

<script setup>
import { computed } from "vue";
import { formStore } from "../stores/formStore.ts";
import { modalStore } from "../stores/modal.ts";

const form = formStore();
const modal = modalStore();

// headline of the button
const headline = computed(() => {
  const headline = {
    loginModal: "Login to your Account",
    createAccountModal: "Create Account",
    profileModal: "Logout",
  };
  return headline[modal.modalTypeGetter];
});

// all fields are mandatory
const isDisabled = computed(() => {
  const { name, lastname, password, email, date } = form;
  return !(name && lastname && password && email && date);
});

// create/login/logut button
const confirm = (type) => {
  if (type === "profileModal") {
    localStorage.clear();
  } else {
    form.createAccount(type);
  }
};
</script>
