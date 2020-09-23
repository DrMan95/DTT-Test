<template>
  <div>
    <h2>What would youlike to see?</h2>
    <div id="categories">
      <b-button size="lg" @click="goToEpisodes">Episodes</b-button>
      <b-button size="lg" @click="goToCharaters">Characters</b-button>
      <b-button size="lg" @click="goToLocations">Locations</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  methods: {
    //rendering HomePage at router-view tag in App.vue
    goToEpisodes() {
      this.$router.push("/");
    },
    //rendering AllCharacters at router-view tag in App.vue
    goToCharaters() {
      this.$router.push("/AllCharacters");
    },
    //rendering AllLocations at router-view tag in App.vue
    goToLocations() {
      this.$router.push("/AllLocations");
    },
  },
};
</script>

<style scoped>
button {
  margin: 0 1%;
  background-color: coral;
  width: 20%;
}
#categories {
  padding: 3%;
}
</style>
