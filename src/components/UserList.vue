<template>
  <tbody>
    <user-item
      v-for="user in userListBySearchResult"
      :key="user.id"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers("user");

export default {
  components: {
    UserItem,
  },
  computed: {
    loading() {
      return false;
    },
    //mapState: take the whole state from store
    ...mapState({
      userList: (state) => state.userList,
    }),

    //getter: modify the state to get the modified data and store it in computed property
    ...mapGetters({
      filterUserListMenOnly: "filterUserListMenOnly",
      userListBySearchResult: "userListBySearchResult",
    }),
    //mutations: update data in the store, always synchronized
    //actions: change data on the state, handle asynchronous action

    // filterUserListMenOnly() {
    //   return this.$store.getters.filterUserListMenOnly;
    // },
    // userList() {
    //   return this.$store.state.userList;
    // },
  },
  methods: {
    ...mapActions({
      getUsers: "getUserListAction",
    }),
  },

  created() {
    this.getUsers();
  },
};
</script>

<style></style>
