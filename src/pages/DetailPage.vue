<template>
  <div>
    <h3>Episode details</h3>
    <div v-if="selectedEpisode">
      <b-list-group>
        <b-list-group-item>
          <b>ID</b>
          : {{ selectedEpisode.id }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Name</b>
          : {{ selectedEpisode.name }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Air Date</b>
          : {{ selectedEpisode.air_date }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Episode</b>
          : {{ selectedEpisode.episode }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Characters</b>
          <div v-if="responseAvailable">
            <div v-for="(record, index) in charactersComputed" :key="record.name">
              <Record @click="() => Show(index)" :record="record" />
            </div>
          </div>
          <div v-else>
            <HourglassLoader v-if="!responseAvailable" :color="'coral'" />
          </div>
        </b-list-group-item>
      </b-list-group>
      <button id="goBack" @click="goBack">Back</button>
    </div>
    <div v-else>
      <b-list-group>
        <b-list-group-item>Data not found</b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import Record from "../components/Record";
import HourglassLoader from "@bit/joshk.vue-spinners-css.hourglass-loader";

export default {
  name: "DetailPage",
  components: {
    Record,
    HourglassLoader,
  },
  data() {
    return {
      characters: [],
      responseAvailable: false,
      // selectedEpisode: undefined,
      selectedChar: undefined,
    };
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    Show(index) {
      this.selectedChar = this.characters[index];
      this.$router.push({
        name: "CharacterPage",
        params: { data: this.selectedChar },
      });
    },
    async getCharacters() {
      this.responseAvailable = false;
      var url = "";
      for (var i = 0; i < this.selectedEpisode.characters.length; i++) {
        url = this.selectedEpisode.characters[i];
        await fetch(url, {
          method: "GET",
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              alert(
                "Server returned " +
                  response.status +
                  " : " +
                  response.statusText
              );
            }
          })
          .then((response) => {
            this.characters.push(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.responseAvailable = true;
    },
  },
  mounted() {
    // this.selectedEpisode = this.$route.params.data;
    this.getCharacters();
  },
  computed: {
    selectedEpisode() {
      return this.$route.params.data;
    },
    charactersComputed() {
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
#goBack {
  background-color: black;
  color: white;
}
</style>
