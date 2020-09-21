<template>
  <div>
    <div>
      <h3>Character details</h3>
      <CharacterDetails :character="character" :allData="allData" />
    </div>
  </div>
</template>

<script>
import CharacterDetails from "../components/CharacterDetails";
export default {
  name: "CharacterPage",
  components: {
    CharacterDetails,
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
    character() {
      return this.$route.params.data;
    },
  },
};
</script>
<style scoped>
</style>