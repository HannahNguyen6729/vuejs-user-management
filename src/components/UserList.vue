<template>
  <tbody>
    <user-item
      v-for="user in filterUserListMenOnly"
      :key="user.id"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { mapState, mapGetters } from "vuex";
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
    }),

    // filterUserListMenOnly() {
    //   return this.$store.getters.filterUserListMenOnly;
    // },
    // userList() {
    //   return this.$store.state.userList;
    // },
  },
};
</script>

<style></style>
