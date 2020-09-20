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
  data() {
    return {};
  },
  props: {
    allData: undefined,
  },
  methods: {},
  computed: {
    locations() {
      return this.allData.locations;
    },
  },
};
</script>

<style scoped></style>
