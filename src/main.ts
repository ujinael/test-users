import { createApp } from "vue";
import { createPinia } from "pinia";
import 'reflect-metadata'
import App from "./App.vue";
import router from "./router";
import {globalComponentsPlugin} from "./components"
import { fontAwesomePlugin } from "./plugins/font-awesome.plugin";
const app = createApp(App);
app.use(globalComponentsPlugin)
app.use(fontAwesomePlugin)
app.use(createPinia());
app.use(router);

app.mount("#app");
