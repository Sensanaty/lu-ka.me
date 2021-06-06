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
  },
  {
    path: "/contact",
    component: ContactPage,
    name: "contact",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
