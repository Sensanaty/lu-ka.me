import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/index.vue";
import AboutPage from "../pages/about/index.vue";
import ContactPage from "../pages/contact/index.vue";
import ProjectsPage from "../pages/projects/index.vue";

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
  {
    path: "/projects",
    component: ProjectsPage,
    name: "projects",
    meta: {
      title: "LUKA | PROJECTS",
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
