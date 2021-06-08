import axios from "axios";

axios.defaults.baseURL = import.meta.env.DEV ? "http://localhost:1337" : "";
axios.defaults.headers.common["Content-Type"] = "application/json";

export const $axios = axios.create();
