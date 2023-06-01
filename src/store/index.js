import { createStore } from "vuex";
import user from "./modules/user";

// Create a new store instance.
const store = createStore({
  modules: {
    //users module
    user,
  },
});

export default store;
