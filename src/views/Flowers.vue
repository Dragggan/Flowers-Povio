<script setup lang="ts">
import { onMounted } from "vue";
import { flowersStore } from "../stores/flowers";

const store = flowersStore();

//  Hooks
onMounted(async () => {
  await store.getFlowers();
});
</script>

<template>test</template>

<style scoped></style>
