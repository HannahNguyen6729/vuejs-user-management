import { createApp } from "vue";
import App from "./App.vue";

import AppModal from "./components/AppModal.vue";
import store from "./store";

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);

app.component("app-modal", AppModal);

app.mount("#app");
