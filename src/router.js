import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import GiftView from "./views/GiftView.vue";
import RegisterView from "./views/RegisterView.vue";
import SuccessView from "./views/SuccessView.vue";
//import ErrorView from "./views/errorView.vue";
import InformationView from "./views/InformationView.vue";
import InternationalTravelView from "./views/InternationalTravelView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/gifts", component: GiftView },
  { path: "/register", component: RegisterView },
  { path: "/information", component: InformationView },
  { path: "/success", component: SuccessView },
  { path: "/:pathMatch(.*)*", redirect: "/" },
  { path: "/international-travel", component: InternationalTravelView },
  //{ path: "/404", component: ErrorView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
