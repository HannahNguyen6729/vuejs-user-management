import { createStore } from "vuex";
import { state, getters, mutations, actions } from "./modules/user";

// Create a new store instance.
const store = createStore({
  modules: {
    //users module
    users: {
      state,
      getters,
      mutations,
      actions,
    },
  },
});

export default store;
