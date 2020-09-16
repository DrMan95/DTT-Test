<template>
  <div>
    <nav>
      <button @click="goToHome">Home</button>
      <button>Categories</button>
      <button @click="goToRandom">Random</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    goToRandom() {
      this.$router.push("/pages/RandomPage");
      // this.$router.go(2);
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 20%;
  height: 45px;
  color: aliceblue;
  font-weight: bold;
  background-color: rgb(255, 0, 0);
  margin: 0 1%;
}
</style>
