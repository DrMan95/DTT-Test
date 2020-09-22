<template>
  <div>
    <h3>Episode details</h3>
    <EpisodeDetails :episode="$route.params.data" :allData="allData" />
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
};
</script>

<style scoped>
</style>
