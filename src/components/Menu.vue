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
    //rendering HomePage at router-view tag in App.vue
    goToHome() {
      this.$router.push("/");
    },
    //rendering Categories at router-view tag in App.vue
    goToCategories() {
      this.$router.push("/Categories");
    },
    //rendering RandomPage at router-view tag in App.vue
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
