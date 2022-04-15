<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Flowers</RouterLink>
    <RouterLink to="/latestsightings">Latest Sightings</RouterLink>
    <RouterLink to="/favorites">Favorites</RouterLink>
  </nav>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
