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
  data() {
    return {};
  },
  props: {
    allData: undefined,
  },
  methods: {},
  computed: {
    characters() {
      return this.allData.characters;
    },
  },
};
</script>

<style scoped></style>
