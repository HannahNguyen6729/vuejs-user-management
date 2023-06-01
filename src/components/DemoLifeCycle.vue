<template>
  <div>
    <input type="text" ref="inputText" />
    <br />
    <p>Count: {{ count }}</p>
    <button @click="handleIncrease">increase</button>
    <br /><br />
    <unmount-life-cycle v-if="count % 2 === 0"></unmount-life-cycle>
  </div>
</template>

<script>
import UnmountLifeCycle from "./UnmountLifeCycle.vue";

export default {
  data() {
    return { count: 0 };
  },
  components: {
    UnmountLifeCycle,
  },
  methods: {
    handleIncrease() {
      this.count++;
    },
  },
  beforeCreate() {
    console.log("beforeCreate", this.count);
  },
  created() {
    console.log("created", this.count);
    this.count = 5;
  },
  beforeMount() {
    console.log("beforeMount", this.count);
    console.log("beforeMount", this.$refs.inputText);
  },
  mounted() {
    console.log("mounted", this.count);
    console.log("mounted", this.$refs.inputText);
    this.$refs.inputText.focus();
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.count);
  },
  updated() {
    console.log("updated", this.count);
  },
};
</script>

<style></style>
