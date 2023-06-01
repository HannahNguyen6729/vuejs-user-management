<template>
  <div>
    <input type="text" ref="inputText" />
    <br />
    <p>Count: {{ count }}</p>
    <button @click="handleIncrease">increase</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 };
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
