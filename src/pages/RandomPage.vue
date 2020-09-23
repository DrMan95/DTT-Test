<template>
  <div>
    <div>
      <h3 v-if="episodeItem">Random Episode Details</h3>
      <h3 v-else-if="characterItem">Random Charecter Details</h3>
      <h3 v-else-if="locationItem">Random Location Details</h3>

      <b-button @click="SelectRandomItem">Next Item</b-button>
      <!-- depending on the item that will be randomly selected it will render the corresponding component -->
      <p v-if="episodeItem">
        <EpisodeDetails :episode="selectedRecord" :allData="allData" />
      </p>
      <p v-else-if="characterItem">
        <CharacterDetails :character="selectedRecord" :allData="allData" />
      </p>
      <p v-else-if="locationItem">
        <LocationDetails :location="selectedRecord" :allData="allData" />
      </p>
      <!-- this one will never render -->
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
    //return a random integer in range 0 to max
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    //randomly choose between the 3 arrays of episodes, characters and locations
    SelectRandomItem() {
      var type = this.getRandomInt(3);
      switch (type) {
        case 0:
          this.episodeItem = true;
          this.characterItem = false;
          this.locationItem = false;
          this.selectedRecord = this.allData.episodes[
            this.getRandomInt(this.allData.episodes.length)
          ];
          break;
        case 1:
          this.episodeItem = false;
          this.characterItem = true;
          this.locationItem = false;
          this.selectedRecord = this.allData.characters[
            this.getRandomInt(this.allData.characters.length)
          ];
          break;
        case 2:
          this.episodeItem = false;
          this.characterItem = false;
          this.locationItem = true;
          this.selectedRecord = this.allData.locations[
            this.getRandomInt(this.allData.locations.length)
          ];
          break;
      }
    },
  },
  //select a random item before rendering the page
  created() {
    this.SelectRandomItem();
  },
};
</script>

<style scoped></style>
