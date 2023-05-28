<template>
  <div class="form-group">
    <div class="input-group">
      <input
        v-model="searchUserName"
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <button
          @click="handleSearch(searchUserName)"
          class="btn btn-sm btn-gradient-primary"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      searchUserName: "",
    };
  },
  methods: {
    // handleSearch() {
    //   this.$store.dispatch("setSearchKeyWordsMutation", this.searchUserName);
    //   // this.$store.commit("setSearchKeyWordsMutation", this.searchUserName);
    // },
    ...mapActions({
      handleSearch: "setSearchKeyWordsMutation",
    }),
  },
};
</script>

<style></style>
