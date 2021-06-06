import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./lib/router";
import { $axios } from "./lib/axios";

import "./assets/styles/global.scss";

const app = createApp(App).use(router);
app.config.globalProperties.$axios = $axios;

app.mount("#app");
