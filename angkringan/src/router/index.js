import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/makanan",
    name: "makanan",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Makanan.vue")
  },
  {
    path: "/minuman",
    name: "minuman",
    component: () => import(/* */ "../views/Minuman.vue")
  },
  {
    path: "/all",
    name: "all",
    component: () => import(/* */ "../views/All.vue")
  },
  {
    path: "/snack",
    name: "snack",
    component: () =>
      import(/* webpackChunkName: "snack" */ "../components/HelloWorld.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
