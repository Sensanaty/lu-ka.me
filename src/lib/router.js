import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/index.vue";
import AboutPage from "../pages/about/index.vue";
import ContactPage from "../pages/contact/index.vue";
import ProjectsPage from "../pages/projects/index.vue";
import RamblesPage from "../pages/rambles/index.vue";
import RamblePost from "../pages/rambles/RamblePost.vue";

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
  {
    path: "/rambles",
    component: RamblesPage,
    name: "rambles",
    meta: {
      title: "LUKA | RAMBLES",
    },
  },
  {
    path: "/rambles/:slug",
    component: RamblePost,
    name: "ramble",
    props: true,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || "LUKA";
});
