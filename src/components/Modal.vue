<template>
  <Dialog :open="store.loginModal" @close="setIsOpen">
    <DialogOverlay />
    <DialogTitle>Deactivate account</DialogTitle>
    <DialogDescription> This will permanently deactivate your account </DialogDescription>
    <p>
      Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot
      be undone.
    </p>
    <!-- <button @click="setIsOpen(false)">Deactivate</button> -->
    <button @click="setIsOpen(false)">Cancel</button>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogOverlay, DialogTitle, DialogDescription } from "@headlessui/vue";
import { modalStore } from "../stores/modal";

function setIsOpen(type: boolean) {
  const store = modalStore();
  store.setModalClose();
}

// const props = defineProps<{
//   type: string;
//   isOpen: boolean;
// }>();
</script>
