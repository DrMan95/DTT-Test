<template>
  <div>
    <p>
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
          <RecordHolder :recordsProp="CharactersComputed" />
        </b-list-group-item>
      </b-list-group>
    </p>
  </div>
</template>

<script>
import RecordHolder from "../components/RecordHolder";
export default {
  name: "EpisodeDetails",
  props: {
    episode: undefined,
    allData: undefined,
  },
  components: {
    RecordHolder,
  },
  computed: {
    //find the characters that are playing in this episode, from the characters array
    characters() {
      var tmp;
      var characters = [];
      for (var i = 0; i < this.episode.characters.length; i++) {
        tmp = this.episode.characters[i].split("/");
        characters.push(this.allData.characters[tmp[tmp.length - 1] - 1]);
      }
      return characters;
    },
    CharactersComputed() {
      return this.characters;
    },
  },
};
</script>
<style scoped></style>
