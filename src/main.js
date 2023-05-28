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
    removeUserActionMutation(state, payload) {
      const index = state.userList.findIndex((user) => user.id === payload);
      if (index !== -1) {
        state.userList = state.userList.filter((user) => user.id !== payload);
        //state.userList.splice(index, 1);
      } else {
        alert("cannot find the matched user id");
      }
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
    removeUserAction(context, payload) {
      // console.log("context", context, "payload", payload);
      context.commit("removeUserActionMutation", payload);
    },
  },
});

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);

app.component("app-modal", AppModal);

app.mount("#app");
