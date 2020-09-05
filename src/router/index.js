import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import LandingPage from "../views/LandingPage/LandingPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "உள்நுழைவு பக்கம்",
    component: LandingPage,
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: "/login",
    name: "உள்நுழைவு பக்கம்",
    component: LandingPage,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes,
});

export default router;