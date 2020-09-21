<template>
  <div>
    <div>
      <h1>All Locations</h1>
      <br />
      <RecordHolder :recordsProp="locations" />
    </div>
  </div>
</template>

<script>
import RecordHolder from "../components/RecordHolder";

export default {
  name: "AllCharacters",
  components: {
    RecordHolder,
  },
  props: {
    allData: undefined,
  },
  computed: {
    locations() {
      return this.allData.locations;
    },
  },
};
</script>

<style scoped></style>
