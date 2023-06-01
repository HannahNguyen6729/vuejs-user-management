<template>
  <div>
    <p>child component - beforeMount, unmounted</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.mountGreeting = setInterval(() => {
      console.log("hi world!");
    }, 1000);
  },
  beforeUnmount() {
    console.log("beforeUnmount");
    //clean up data existing in the app, save memory, avoid errors
    clearInterval(this.mountGreeting);
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style></style>
