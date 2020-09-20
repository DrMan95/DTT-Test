<template>
  <div>
    <div id="container" class="bv-example-row">
      <b-col id="sitemap">
        <b-row>
          <b-link @click="goToEpisodes">Episodes</b-link>
        </b-row>
        <b-row>
          <b-link @click="goToCharaters">Characters</b-link>
        </b-row>
        <b-row>
          <b-link @click="goToLocations">Location</b-link>
        </b-row>
      </b-col>
      <b-col id="contact">
        <b-row>
          <b>Contact Me</b>
        </b-row>
        <b-row>Email</b-row>
        <b-row>LinkedIn</b-row>
        <b-row>Facebook</b-row>
        <b-row>Instagram</b-row>
      </b-col>
    </div>
    <p id="copyright">© Greece, 2020, Manthos Dretakis</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      responseAvailable: false,
      selectedRecord: undefined,
    };
  },
  methods: {
    goToEpisodes() {
      this.$router.push("/");
    },
    goToCharaters() {
      this.$router.push("/pages/AllCharacters");
    },
    goToLocations() {
      this.$router.push("/pages/AllLocations");
    },
  },
};
</script>
<style scoped>
#container {
  width: 100%;
  padding-top: 2%;
  display: grid;
  grid-template-columns: 72% auto;
}
#sitemap {
  margin-left: 25%;
}
</style>