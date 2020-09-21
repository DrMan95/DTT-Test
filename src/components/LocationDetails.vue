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
          <div v-if="CharactersComputed.length">
            <div v-if="characters.length > 0">
              <div v-for="(record, index) in CharactersComputed" :key="record.id">
                <Record @click="() => Show(index)" :record="record" />
              </div>
            </div>
            <div v-else>This planet has no residents.</div>
          </div>
          <div v-else>
            <HourglassLoader v-if="!responseAvailable" :color="'coral'" />
          </div>
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
import Record from "../components/Record";
import HourglassLoader from "@bit/joshk.vue-spinners-css.hourglass-loader";

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
    HourglassLoader,
    Record,
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