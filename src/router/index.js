import Vue from "vue";
import VueRouter from "vue-router";
//import AppView from "../views/AppView.vue";
import LandingPage from "../views/LandingPage/LandingPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "வழுவுதல்",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // {
  //   path: "/",
  //   name: "முகப்பு",
  //   component: AppView,
  // },
  {
    path: "/login",
    name: "உள்நுழைவு பக்கம்",
    component: LandingPage,
  },
  {
    path: "/about",
    name: "செயலி பற்றி",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
