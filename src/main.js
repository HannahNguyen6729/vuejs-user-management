import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import userList from "../src/data/devs.json";

import AppModal from "./components/AppModal.vue";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      userList,
    };
  },
});

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);

app.component("app-modal", AppModal);

app.mount("#app");
