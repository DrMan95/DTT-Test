<template>
  <div>
    <p>
      <b-list-group>
        <b-list-group-item>
          <b>ID</b>
          : {{ location.id }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Name</b>
          : {{ location.name }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Type</b>
          : {{ location.type }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Residents</b>
          <RecordHolder v-if="CharactersComputed.length > 0" :recordsProp="CharactersComputed" />
          <p v-else>This Planet has no residents.</p>
        </b-list-group-item>
        <b-list-group-item>
          <b>Created</b>
          : {{ location.created }}
        </b-list-group-item>
      </b-list-group>
    </p>
  </div>
</template>

<script>
import RecordHolder from "../components/RecordHolder";

export default {
  name: "LocationDetails",
  data() {
    return {
      selectedRecord: undefined,
    };
  },
  props: {
    location: undefined,
    allData: undefined,
  },
  components: {
    RecordHolder,
  },
  methods: {
    Show(index) {
      this.selectedRecord = this.CharactersComputed[index];
      this.$router.push({
        name: "CharacterPage",
        params: { data: this.selectedRecord },
      });
    },
  },
  computed: {
    characters() {
      var tmp;
      var characters = [];
      for (var i = 0; i < this.location.residents.length; i++) {
        tmp = this.location.residents[i].split("/");
        characters.push(this.allData.characters[tmp[tmp.length - 1] - 1]);
      }
      return characters;
    },
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