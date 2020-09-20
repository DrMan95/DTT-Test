<template>
  <div>
    <div>
      <h3>Location details</h3>
      <p v-if="responseAvailable">
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
            <div v-for="(record, index) in CharactersComputed" :key="record.id">
              <Record @click="() => Show(index)" :record="record" />
            </div>
          </b-list-group-item>
          <b-list-group-item>
            <b>Created</b>
            : {{ location.created }}
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
  name: "LocationPage",
  components: {
    Record,
  },
  data() {
    return {
      responseAvailable: false,
      characters: [],
      selectedRecord: undefined,
    };
  },
  props: {
    allData: undefined,
  },
  mounted() {
    this.getCharacters();
    this.responseAvailable = true;
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    Show(index) {
      this.selectedRecord = this.characters[index];
      this.$router.push({
        name: "CharacterPage",
        params: { data: this.selectedRecord },
      });
    },
    getCharacters() {
      var tmp;
      for (var i = 0; i < this.location.residents.length; i++) {
        tmp = this.location.residents[i].split("/");
        this.characters.push(this.allData.characters[tmp[tmp.length - 1] - 1]);
      }
    },
  },
  computed: {
    location() {
      return this.$route.params.data;
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
#goBack {
  background-color: black;
  color: white;
}
</style>