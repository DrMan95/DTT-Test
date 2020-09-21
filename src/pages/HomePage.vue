<template>
  <div>
    <div id="homeComtainer">
      <h1>Welcome to my Home page</h1>
      <h3>
        These are Rick & Morty
        episodes
      </h3>
      <br />
      <RecordHolder :recordsProp="episodes" />
    </div>
  </div>
</template>

<script>
import RecordHolder from "../components/RecordHolder";

export default {
  name: "HomePage",
  components: {
    RecordHolder,
  },
  props: {
    allData: undefined,
  },
  computed: {
    episodes() {
      return this.allData.episodes;
    },
  },
};
</script>

<style scoped></style>
