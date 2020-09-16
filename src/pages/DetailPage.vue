<template>
  <div>
    <h3>Details</h3>
    <div v-if="selectedRecord">
      <b-list-group>
        <b-list-group-item>
          <b>ID</b>
          : {{ selectedRecord.id }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Name</b>
          : {{ selectedRecord.name }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Air Date</b>
          : {{ selectedRecord.air_date }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Episode</b>
          : {{ selectedRecord.episode }}
        </b-list-group-item>
        <b-list-group-item v-if="responseAvailable">
          <b>Characters</b>

          <div v-for="record in charactersComputed" :key="record.name">
            <Record :record="record" />
          </div>
        </b-list-group-item>
      </b-list-group>
      <button id="closeDetails" @click="goBack">
        Back
      </button>
    </div>
    <div v-else>
      <b-list-group>
        <b-list-group-item>
          Data not found
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import Record from "../components/Record";

export default {
  name: "DetailPage",
  components: {
    Record,
  },
  data() {
    return {
      characters: [],
      responseAvailable: false,
      selectedRecord: undefined,
    };
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    getCharacters() {
      this.responseAvailable = false;
      var url = "";
      console.log(this.$route.params.data);
      for (var i = 0; i < this.$route.params.data.characters.length; i++) {
        url = this.$route.params.data.characters[i];
        fetch(url, {
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
    this.selectedRecord = this.$route.params.data;
    this.getCharacters();
  },
  computed: {
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
#closeDetails {
  background-color: black;
  color: white;
}
</style>
