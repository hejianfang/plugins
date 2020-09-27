import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/table",
    name: "Table",
    component: () => import("../views/Table.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
