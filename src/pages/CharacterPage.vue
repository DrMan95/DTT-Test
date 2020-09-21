<template>
  <div>
    <div>
      <h3>Character details</h3>
      <CharacterDetails :character="character" :allData="allData" />
      <button id="goBack" @click="goBack">Back</button>
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
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
  computed: {
    character() {
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