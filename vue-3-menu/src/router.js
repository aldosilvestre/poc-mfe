import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: []
})

export default router;
