<script setup lang="ts">
import { onMounted } from "vue";
import { flowersStore } from "../stores/flowers";
import { storeToRefs } from "pinia";

const { flowers, loading, error } = storeToRefs(flowersStore());

//  Hooks
onMounted(async () => {
  const store = flowersStore();
  await store.getFlowers();
  flowers.value = store.flowers;
});
</script>

<template>
  <p v-if="loading">Loading posts...</p>
  <p v-if="error">{{ error }}</p>
  <div class="container w-screen-xl flex flex-col m-auto justify-center" :style="{ border: 'solid green 2px' }">
    <section class="backgroud w-max" :style="{ border: 'solid blue 2px' }">
      <img src="../assets/images/background_flowers.png" alt="backgroud image" class="relative" />
      <input
        type="text"
        placeholder="Looking for something specific?"
        class="absolute top-50 left-70 w-1/3 h-10 rounded-md"
      />
    </section>
    <section class="flowers_wrapper flex flex-wrap" :style="{ border: 'solid gold 2px' }">
      <div v-for="flower in flowers" :key="flower.id" :style="{ border: 'solid red 1px' }">
        <img :src="`${flower.profile_picture}`" alt="flower background" class="h-11/12 w-60 m-2 ml-6" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1230px;
}
</style>
