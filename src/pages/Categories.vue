<template>
  <div>
    <h2>What would youlike to see?</h2>
    <br />
    <b-button size="lg" variant="info" @click="goToEpisodes">Episodes</b-button>
    <br />
    <br />
    <b-button size="lg" variant="info" @click="goToCharaters">Characters</b-button>
    <br />
    <br />
    <b-button size="lg" variant="info" @click="goToLocations">Locations</b-button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {};
  },
  methods: {
    goToEpisodes() {
      this.$router.push("/");
    },
    goToCharaters() {
      this.$router.push("/AllCharacters");
    },
    goToLocations() {
      this.$router.push("/AllLocations");
    },
  },
};
</script>

<style scoped>
b-button {
  margin: 0 1%;
}
</style>