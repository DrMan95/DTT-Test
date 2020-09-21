<template>
  <div>
    <p v-if="responseAvailable">
      <b-list-group>
        <b-list-group-item>
          <b>ID</b>
          : {{ episode.id }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Name</b>
          : {{ episode.name }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Air Date</b>
          : {{ episode.air_date }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Episode</b>
          : {{ episode.episode }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Characters</b>
          <div v-if="responseAvailable">
            <div v-for="(record, index) in CharactersComputed" :key="record.id">
              <Record @click="() => Show(index)" :record="record" />
            </div>
          </div>
          <div v-else>
            <HourglassLoader v-if="!responseAvailable" :color="'coral'" />
          </div>
        </b-list-group-item>
      </b-list-group>
    </p>
  </div>
</template>

<script>
import Record from "../components/Record";
import HourglassLoader from "@bit/joshk.vue-spinners-css.hourglass-loader";
export default {
  name: "EpisodeDetails",
  data() {
    return {
      responseAvailable: false,
      characters: [],
      selectedRecord: undefined,
    };
  },
  props: {
    episode: undefined,
    allData: undefined,
  },
  components: {
    Record,
    HourglassLoader,
  },
  methods: {
    Show(index) {
      this.selectedRecord = this.CharactersComputed[index];
      this.$router.push({
        name: "CharacterPage",
        params: { data: this.selectedRecord },
      });
    },
    getCharacters() {
      var tmp;
      for (var i = 0; i < this.episode.characters.length; i++) {
        tmp = this.episode.characters[i].split("/");
        this.characters.push(this.allData.characters[tmp[tmp.length - 1] - 1]);
      }
    },
  },
  mounted() {
    this.getCharacters();
    this.responseAvailable = true;
  },
  computed: {
    CharactersComputed() {
      if (this.characters.length > 0) {
        return this.characters;
      } else {
        return [];
      }
    },
  },
};
</script>
<style scoped>
</style>