import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Scenarios from "../views/Scenarios.vue";
import Map from "../views/Map.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/scenarios",
    name: "scenarios",
    component: Scenarios
  },
  {
    path: "/map",
    name: "map",
    component: Map
  }
];

const router = new VueRouter({
  routes
});

export default router;
