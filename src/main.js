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
  getters: {
    filterUserListMenOnly(state) {
      return state.userList.filter((user) => user.gender === "Male");
    },
  },
});

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);

app.component("app-modal", AppModal);

app.mount("#app");
