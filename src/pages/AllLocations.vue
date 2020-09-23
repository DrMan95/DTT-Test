<template>
  <div>
    <div>
      <h1>All Locations</h1>
      <RecordHolder :recordsProp="allData.locations" />
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
};
</script>

<style scoped></style>
