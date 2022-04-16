<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>
          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                <span
                  @click="closeModal"
                  class="float-right mx-3 hover:cursor-pointer"
                  >X</span
                >
                <div class="my-4 text-center">
                  {{ headline }}
                </div>
              </DialogTitle>
              <!-- ==2========================================================================================== -->
              <!-- ==================== form modal ============================================================ -->
              <form
                class="w-full max-w-lg"
                v-if="modal.modalTypeGetter !== 'profileModal'"
              >
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder=" First Name"
                      v-model="form.name"
                      v-if="modal.modalTypeGetter !== 'loginModal'"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Last Name"
                      v-model="form.lastname"
                      v-if="modal.modalTypeGetter !== 'loginModal'"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-date"
                      type="date"
                      placeholder="Date of birth"
                      v-model="form.date"
                      v-if="modal.modalTypeGetter !== 'loginModal'"
                    />
                    <p class="text-gray-600 text-xs italic"></p>
                  </div>
                  <div class="w-full px-3">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="text"
                      placeholder="Email address"
                      v-model="form.email"
                    />
                    <p class="text-gray-600 text-xs italic"></p>
                  </div>
                  <div class="w-full px-3">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      placeholder="Password"
                      v-model="form.password"
                    />
                    <p class="text-gray-600 text-xs italic"></p>
                  </div>
                </div>
              </form>
              <div class="mt-4">
                <ConfirmButton />
              </div>
              <!-- ============================================================================================================= -->
              <!-- =======================================================Profile modal ======================================== -->
              <div class="p-6" v-if="modal.modalTypeGetter === 'profileModal'">
                <div class="flex content-center items-center">
                  <img
                    src="../assets/images/profilmock.png"
                    alt="profil image fake"
                  />
                  <h1 class="ml-2 text-xl">Michael Berry</h1>
                </div>
                <p class="text-xs mt-4">First Name</p>
                <h2 class="text-lg mb-3">Michael</h2>
                <p class="text-xs">First Name</p>
                <h2 class="text-lg mb-3">Berry</h2>
                <p class="text-xs">Email Address</p>
                <h2 class="text-lg mb-3">michael.berry@gmail.com</h2>
                <ConfirmButton />
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { modalStore } from "../stores/modal.ts";
import { formStore } from "../stores/formStore.ts";

// stores connecting
const modal = modalStore();
const form = formStore();

// is modal open/closed
const isOpen = ref(false);

// headline of the modal
const headline = computed(() => {
  const headline = {
    loginModal: "Welcome Back",
    createAccountModal: "Create an Account",
    profileModal: null,
  };
  return headline[modal.modalTypeGetter];
});

// subscribing to the store for show/hide modal
modal.$subscribe((mutation) => {
  let openModal = Boolean(
    mutation.events.target.createAccountModal ||
      mutation.events.target.loginModal ||
      mutation.events.target.profileModal
  );
  isOpen.value = openModal;
});

const closeModal = () => {
  isOpen.value = false;
  modal.isModalClosed();
};
</script>
