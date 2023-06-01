import userList from "../../data/devs.json";
import getUsersApi from "../../api/users";

const state = () => {
  return {
    userList,
    searchKeyWords: "",
  };
};
const getters = {
  filterUserListMenOnly(state) {
    return state.userList.filter((user) => user.gender === "Male");
  },
  userListBySearchResult(state) {
    return state.userList.filter((user) =>
      user.name.toLowerCase().includes(state.searchKeyWords.toLowerCase())
    );
  },
};

const mutations = {
  getUserListMutation(state, payload) {
    state.userList = payload;
  },
  setSearchKeyWordsMutation(state, payload) {
    state.searchKeyWords = payload;
  },
  addUserActionMutation(state, payload) {
    state.userList = [...state.userList, payload];
    // state.userList.push(payload)
  },
  updateUserActionMutation(state, payload) {
    const index = state.userList.findIndex((user) => user.id === payload.id);
    if (index !== -1) {
      state.userList[index] = payload;
    } else {
      alert("can not update user");
    }
    //   state.userList = [...state.userList].map((user) => {
    //     if (user.id === payload.id) {
    //       return payload;
    //     } else {
    //       return user;
    //     }
    //   });
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
};

const actions = {
  //call api here to get the user list
  async getUserListAction(context) {
    const payload = await getUsersApi();
    context.commit("getUserListMutation", payload);
  },
  setSearchKeyWordsMutation(context, payload) {
    setTimeout(() => {
      context.commit("setSearchKeyWordsMutation", payload);
    }, 800);
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
  updateUserAction(context, payload) {
    console.log(payload);
    context.commit("updateUserActionMutation", payload);
  },
  removeUserAction(context, payload) {
    // console.log("context", context, "payload", payload);
    context.commit("removeUserActionMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
