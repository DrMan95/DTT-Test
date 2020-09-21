<template>
  <div>
    <h3>Episode details</h3>
    <div v-if="selectedEpisode">
      <EpisodeDetails :episode="selectedEpisode" :allData="allData" />
      <button id="goBack" @click="goBack">Back</button>
    </div>
    <div v-else>
      <b-list-group>
        <b-list-group-item>Data not found</b-list-group-item>
      </b-list-group>
    </div>
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
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
  computed: {
    selectedEpisode() {
      return this.$route.params.data;
    },
  },
};
</script>

<style scoped>
#goBack {
  background-color: black;
  color: white;
}
</style>
