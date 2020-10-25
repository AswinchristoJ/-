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
    name: "இச்செயலிப்பற்றி",
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

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    localStorage.clear();
    next();
    return;
  }
  const id = localStorage.getItem("ULAVUKKADAI_ID");
  const password = localStorage.getItem("ULAVUKKADAI_PASS");
  if (id && password) next();
  else next({ path: "login" });
});

export default router;
