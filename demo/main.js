import { createApp } from "vue";
import App from "./App.vue";
import Agile from "../src";

const app = createApp(App);
app.use(Agile);
app.mount("#app");
