<template>
  <div>
    <div>
      <h3 v-if="episodeItem">Random Episode Details</h3>
      <h3 v-else-if="characterItem">Random Charecter Details</h3>
      <h3 v-else-if="locationItem">Random Location Details</h3>

      <button @click="SelectRandomItem">Next</button>
      <p v-if="episodeItem">
        <EpisodeDetails :episode="selectedRecord" :allData="allData" />
      </p>
      <p v-else-if="characterItem">
        <CharacterDetails :character="selectedRecord" :allData="allData" />
      </p>
      <p v-else-if="locationItem">
        <LocationDetails :location="selectedRecord" :allData="allData" />
      </p>
      <p v-else>Something went wrong!</p>
    </div>
  </div>
</template>

<script>
import EpisodeDetails from "../components/EpisodeDetails";
import CharacterDetails from "../components/CharacterDetails";
import LocationDetails from "../components/LocationDetails";

export default {
  name: "RandomPage",
  components: {
    EpisodeDetails,
    CharacterDetails,
    LocationDetails,
  },
  data() {
    return {
      episodeItem: false,
      characterItem: false,
      locationItem: false,
      selectedRecord: undefined,
    };
  },
  props: {
    allData: undefined,
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    SelectRandomItem() {
      var type = this.getRandomInt(3);
      switch (type) {
        case 0:
          this.episodeItem = true;
          this.characterItem = false;
          this.locationItem = false;
          this.selectedRecord = this.episodes[
            this.getRandomInt(this.episodes.length)
          ];
          break;
        case 1:
          this.episodeItem = false;
          this.characterItem = true;
          this.locationItem = false;
          this.selectedRecord = this.characters[
            this.getRandomInt(this.characters.length)
          ];
          break;
        case 2:
          this.episodeItem = false;
          this.characterItem = false;
          this.locationItem = true;
          this.selectedRecord = this.locations[
            this.getRandomInt(this.locations.length)
          ];
          break;
      }
    },
  },
  computed: {
    episodes() {
      return this.allData.episodes;
    },
    characters() {
      return this.allData.characters;
    },
    locations() {
      return this.allData.locations;
    },
  },
  mounted() {
    this.SelectRandomItem();
  },
};
</script>

<style scoped></style>
