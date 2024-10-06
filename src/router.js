import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import GiftView from "./views/GiftView.vue";
import RegisterView from "./views/RegisterView.vue";
import ErrorView from "./views/ErrorView.vue";
import InformationView from "./views/InformationView.vue";
import InternationalTravelView from "./views/InternationalTravelView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/gifts", component: GiftView },
  { path: "/register", component: RegisterView },
  { path: "/information", component: InformationView },

  { path: "/international-travel", component: InternationalTravelView },
  { path: "/404", component: ErrorView },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
