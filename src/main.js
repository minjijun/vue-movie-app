import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import store from "./store/index.js";
import loadImage from "./plugins/loadImage.js";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(loadImage);
app.mount("#app");
