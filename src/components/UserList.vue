<template>
  <tbody>
    <user-item v-for="user in userList" :key="user.id" :user="user"></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
export default {
  components: {
    UserItem,
  },
  computed: {
    userList() {
      return this.$store.state.userList;
    },
  },
};
</script>

<style></style>
