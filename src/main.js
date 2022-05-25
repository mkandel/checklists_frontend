import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter } from "vue-router";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
const router = createRouter();
app.use(router);
app.mount("#app");
