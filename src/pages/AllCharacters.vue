<template>
  <div>
    <div>
      <h1>All Characters</h1>
      <br />
      <RecordHolder :recordsProp="characters" />
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
    characters() {
      return this.allData.characters;
    },
  },
};
</script>

<style scoped></style>
