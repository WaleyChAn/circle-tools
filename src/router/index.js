import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/demo",
    },
    {
      path: "/demo",
      name: "demo",
      component: () => import("@/views/demo.vue"),
    },
  ],
});

export default router;
