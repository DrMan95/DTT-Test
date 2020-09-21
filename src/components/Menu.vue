<template>
  <div>
    <nav>
      <button @click="goToHome">Home</button>
      <button @click="goToCategories">Categories</button>
      <button @click="goToRandom">Random</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToCategories() {
      this.$router.push("/Categories");
    },
    goToRandom() {
      this.$router.push("/RandomPage");
    },
  },
};
</script>

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
