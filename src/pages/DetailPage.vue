<template>
  <div>
    <h3>Episode details</h3>
    <EpisodeDetails :episode="selectedEpisode" :allData="allData" />
  </div>
</template>

<script>
import EpisodeDetails from "../components/EpisodeDetails";

export default {
  name: "DetailPage",
  components: {
    EpisodeDetails,
  },
  data() {
    return {
      responseAvailable: false,
    };
  },
  props: {
    allData: undefined,
  },
  computed: {
    selectedEpisode() {
      return this.$route.params.data;
    },
  },
};
</script>

<style scoped>
</style>
