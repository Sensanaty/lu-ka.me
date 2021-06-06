import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/index.vue";
import AboutPage from "../pages/about/index.vue";
import ContactPage from "../pages/contact/index.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/about",
    component: AboutPage,
    name: "about",
    meta: {
      title: "LUKA | ABOUT",
    },
  },
  {
    path: "/contact",
    component: ContactPage,
    name: "contact",
    meta: {
      title: "LUKA | CONTACT",
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || "LUKA";
});
