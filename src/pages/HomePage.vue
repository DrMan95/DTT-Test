<template>
  <div>
    <div>
      <h2>
        These are Rick & Morty
        episodes
      </h2>
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
