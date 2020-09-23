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
        <b-row>dretakis.dre@gmail.com</b-row>
        <b-row>
          <a
            href="https://www.linkedin.com/in/manthos-dretakis-3133a5197/"
            target="_blank"
            >LinkedIn</a
          >
        </b-row>
        <b-row>
          <a href="https://www.facebook.com/manthos.dretakis" target="_blank"
            >Facebook</a
          >
        </b-row>
        <b-row>
          <a href="https://www.instagram.com/dr.man95/?hl=en" target="_blank"
            >Instagram</a
          >
        </b-row>
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
#container {
  width: 100%;
  padding-top: 2%;
  display: grid;
  grid-template-columns: 72% auto;
}
#sitemap {
  margin-left: 25%;
}
#container a {
  color: white;
}
</style>
