<template>
  <div>
    <div>
      <h2>These are Rick & Morty episodes</h2>
      <!-- component that holds all the episodes -->
      <RecordHolder :recordsProp="allData.episodes" />
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
};
</script>

<style scoped></style>
