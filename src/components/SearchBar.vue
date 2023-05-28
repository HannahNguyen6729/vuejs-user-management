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
          @click="handleSearch"
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
export default {
  data() {
    return {
      searchUserName: "",
    };
  },
  methods: {
    handleSearch() {
      this.$store.commit("setSearchKyWordsMutation", this.searchUserName);
    },
  },
};
</script>

<style></style>
