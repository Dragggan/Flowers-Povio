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
  <div
    class="container w-screen-xl flex flex-col m-auto"
    :style="{ border: 'solid green 2px' }"
  >
    <div
      class="backgroud_image w-full h-120 flex justify-center items-center flex flex-col"
    >
      <h1 class="text-white mb-2 text-4xl">Discover flowers around you</h1>
      <p class="text-gray-400 mb-5">
        Explore between more than 8.427 sightings
      </p>
      <input
        type="text"
        placeholder="Looking for something specific?"
        class="top-50 left-70 w-1/3 h-10 rounded-md pl-2"
      />
    </div>
    <div
      class="flowers_wrapper flex flex-wrap"
      :style="{ border: 'solid gold 2px' }"
    >
      <div
        v-for="flower in flowers"
        :key="flower.id"
        :style="{ border: 'solid red 1px' }"
      >
        <img
          :src="`${flower.profile_picture}`"
          alt="flower background"
          class="h-11/12 w-67 m-2 ml-6"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1230px;
}
.backgroud_image {
  background-image: url("../assets/images/background_flowers.png");
}
</style>
