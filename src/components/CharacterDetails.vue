<template>
  <div>
    <p>
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
          <Record @click="() => ShowL()" :record="location" />
        </b-list-group-item>
        <b-list-group-item>
          <b>Image</b>
          <br />
          <b-img :src="character.image" fluid alt="Responsive image"></b-img>
        </b-list-group-item>
        <b-list-group-item>
          <b>Episodes</b>
          <RecordHolder :recordsProp="EpisodesComputed" />
        </b-list-group-item>
        <b-list-group-item>
          <b>Created</b>
          : {{ character.created }}
        </b-list-group-item>
      </b-list-group>
    </p>
  </div>
</template>

<script>
import RecordHolder from "../components/RecordHolder";
import Record from "../components/Record";
export default {
  name: "CharacterDetails",
  data() {
    return {
      selectedRecord: undefined,
    };
  },
  props: {
    character: undefined,
    allData: undefined,
  },
  components: {
    RecordHolder,
    Record,
  },
  methods: {
    Show(index) {
      this.selectedRecord = this.EpisodesComputed[index];
      this.$router.push({
        name: "DetailPage",
        params: { data: this.selectedRecord },
      });
    },
    ShowL() {
      this.selectedRecord = this.location;
      this.$router.push({
        name: "LocationPage",
        params: { data: this.selectedRecord },
      });
    },
  },
  computed: {
    location() {
      var tmp = this.character.location.url.split("/");
      return this.allData.locations[tmp[tmp.length - 1] - 1];
    },
    episodes() {
      var tmp;
      var episodes = [];
      for (var i = 0; i < this.character.episode.length; i++) {
        tmp = this.character.episode[i].split("/");
        episodes.push(this.allData.episodes[tmp[tmp.length - 1] - 1]);
      }
      return episodes;
    },
    EpisodesComputed() {
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
</style>