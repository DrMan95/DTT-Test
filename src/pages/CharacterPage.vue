<template>
  <div>
    <div>
      <h3>Character details</h3>
      <p v-if="responseAvailable">
        <b-list-group>
          <b-list-group-item>
            <b>ID</b>
            : {{ character.id }}
          </b-list-group-item>
          <b-list-group-item>
            <b>Name</b>
            : {{ character.name }}
          </b-list-group-item>
          <b-list-group-item>
            <b>Status</b>
            : {{ character.status }}
          </b-list-group-item>
          <b-list-group-item>
            <b>Species</b>
            : {{ character.species }}
          </b-list-group-item>
          <b-list-group-item>
            <b>Type</b>
            : {{ character.type }}
          </b-list-group-item>
          <b-list-group-item>
            <b>Gender</b>
            : {{ character.gender }}
          </b-list-group-item>
          <b-list-group-item>
            <b>Origin</b>
            : {{ character.origin.name }}
          </b-list-group-item>
          <b-list-group-item>
            <b>Location</b>
            : {{ character.location.name }}
          </b-list-group-item>
          <b-list-group-item>
            <b>Image</b>
            <br />
            <b-img :src="character.image" fluid alt="Responsive image"></b-img>
          </b-list-group-item>
          <b-list-group-item>
            <b>Episodes</b>
            <div v-for="(record, index) in episodesComputed" :key="record">
              <Record @click="() => Show(index)" :record="record" />
            </div>
          </b-list-group-item>
          <b-list-group-item>
            <b>Created</b>
            : {{ character.created }}
          </b-list-group-item>
        </b-list-group>
        <button id="goBack" @click="goBack">Back</button>
      </p>
    </div>
  </div>
</template>

<script>
import Record from "../components/Record";
export default {
  name: "CharacterPage",
  components: {
    Record,
  },
  data() {
    return {
      responseAvailable: false,
      character: undefined,
      episodes: [],
      selectedRecord: undefined,
    };
  },
  props: {
    allData: undefined,
  },
  mounted() {
    this.character = this.$route.params.data;
    this.getEpisodes();
    this.responseAvailable = true;
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    Show(index) {
      this.selectedRecord = this.episodes[index];
      this.$router.push({
        name: "DetailPage",
        params: { data: this.selectedRecord },
      });
    },
    getEpisodes() {
      var tmp;
      for (var i = 0; i < this.character.episode.length; i++) {
        tmp = this.character.episode[i].split("/");
        this.episodes.push(this.allData.episodes[tmp[tmp.length - 1] - 1]);
      }
    },
  },
  computed: {
    episodesComputed() {
      if (this.episodes.length > 0) {
        return this.episodes;
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