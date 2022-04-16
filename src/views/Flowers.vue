<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { flowersStore } from "../stores/flowers";
import { authStore } from "../stores/authStore.ts";
import { storeToRefs } from "pinia";
import Spinner from "@/components/Spinner.vue";

const { flowers, loading, error } = storeToRefs(flowersStore());
const auth = authStore();

// watching for flower search
const search = ref("");
let flower = flowersStore();

const setAsFavorite = (flower_id) => {
  flower.setAsFavorite(flower_id);
};

watch(
  () => search.value,
  () => {
    flower.flowerSearch(search.value);
  }
);

//  Hooks
onMounted(async () => {
  const store = flowersStore();
  await store.getFlowers();
  flowers.value = store.flowers;
});
</script>

<template>
  <Spinner v-if="loading" />
  <p v-if="error" class="mt-5 flex w-full justify-center">
    {{ error }}
  </p>
  <div v-else class="container w-screen-xl flex flex-col m-auto mb-20">
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
        class="top-50 left-70 w-1/3 h-10 rounded-md pl-2 w-116"
        v-model="search"
      />
    </div>
    <div
      class="flowers_wrapper flex flex-wrap mt-20"
      :class="{ 'justify-between': flowers.length >= 4 }"
    >
      <div
        class="relative"
        :class="{ 'mr-6': flowers.length < 4 }"
        v-for="flower in flowers"
        :key="flower.id"
      >
        <img
          :src="`${flower.profile_picture}`"
          alt="flower background"
          class="h-60 w-55 mt-2 mb-6"
        />
        <img
          src="../assets/images/star.png"
          v-if="auth.isLogedIn"
          alt="favorite star"
          class="absolute top-3 right-2 cursor-pointer"
          @click="setAsFavorite(flower.id)"
        />
        <p
          class="text-xl text-white absolute bottom-22 w-full text-center antialiased"
        >
          {{ flower.name }}
        </p>
        <p
          class="text-l text-light-100 stroke-dark-50 absolute bottom-17 w-full text-center truncate"
        >
          {{ flower.latin_name }}
        </p>
        <div class="flex w-full justify-center">
          <button
            class="absolute bottom-8 text-center px-4 text-sm bg-gray-200 hover:bg-gray-300 border border-transparent rounded-xl w-30 h-6"
          >
            {{ flower.sightings }} sightings
          </button>
        </div>
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
