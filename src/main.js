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
      searchKeyWords: "anda",
    };
  },
  getters: {
    filterUserListMenOnly(state) {
      return state.userList.filter((user) => user.gender === "Male");
    },
    userListBySearchResult(state) {
      return state.userList.filter((user) =>
        user.name.toLowerCase().includes(state.searchKeyWords.toLowerCase())
      );
    },
  },
  mutations: {
    setSearchKeyWordsMutation(state, payload) {
      state.searchKeyWords = payload;
    },
    addUserActionMutation(state, payload) {
      state.userList = [...state.userList, payload];
      // state.userList.push(payload)
    },
  },
  actions: {
    setSearchKeyWordsMutation(context, payload) {
      setTimeout(() => {
        context.commit("setSearchKeyWordsMutation", payload);
      }, 1500);
    },
    addUserAction(context, payload) {
      //console.log("context", context,"payload", payload);
      //create a new user object:
      const newUser = {
        ...payload,
        id: Math.floor(Math.random() * 9999999999999999),
      };
      context.commit("addUserActionMutation", newUser);
    },
  },
});

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);

app.component("app-modal", AppModal);

app.mount("#app");
