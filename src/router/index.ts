import { createRouter, createWebHistory } from "vue-router";
import Flowers from "../views/Flowers.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Flowers",
      component: Flowers,
    },
    {
      path: "/latestsightings",
      name: "latestsightings",
      component: () => import("../views/Latestsightings.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../views/Favorites.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      name: "PageNotFound",
      component: () => import("../views/404.vue"),
    },
  ],
});

export default router;
