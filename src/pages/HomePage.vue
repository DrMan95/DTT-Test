<template>
  <div>
    <div id="homeComtainer">
      <h1>Welcome to my Home page</h1>
      <h3>
        These are {{ records.length }}/{{ episodes.length }} Rick & Morty
        episodes
      </h3>
      <br />
      <HourglassLoader v-if="!responseAvailable" :color="'coral'" />
      <div v-if="responseAvailable">
        <div id="sortContainer">
          <b-button
            pill
            variant="outline-secondary"
            :pressed.sync="IDToggle"
            id="sortID"
            @click="SortByID"
          >
            Sort by episode
          </b-button>
          <b-button
            pill
            variant="outline-secondary"
            :pressed.sync="NameToggle"
            id="sortName"
            @click="SortByName"
          >
            Sort by name
          </b-button>
        </div>
        <div v-for="(record, index) in sortedRecords" :key="record.name">
          <Record @click="() => Show(index)" :record="record" />
        </div>
        <b-link v-if="records.length == 10" @click="ShowAll">Show All</b-link>
        <b-link v-else @click="ShowLess">Show Less</b-link>
      </div>
    </div>
  </div>
</template>

<script>
import Record from "../components/Record";
import HourglassLoader from "@bit/joshk.vue-spinners-css.hourglass-loader";

export default {
  name: "HomePage",
  components: {
    Record,
    HourglassLoader,
  },
  data() {
    return {
      responseAvailable: false,
      records: [],
      episodes: [],
      selectedRecord: undefined,
      IDToggle: true,
      NameToggle: false,
    };
  },
  methods: {
    ShowAll() {
      this.records = this.episodes;
    },
    ShowLess() {
      this.records = this.episodes.filter((elem, index) => index < 10);
    },
    Show(index) {
      this.selectedRecord = this.sortedRecords[index];
      console.log(this.selectedRecord);
      this.$router.push({
        name: "DetailPage",
        params: { data: this.selectedRecord },
      });
    },
    SortByID() {
      this.IDToggle = true;
      this.NameToggle = false;
    },
    SortByName() {
      this.IDToggle = false;
      this.NameToggle = true;
    },
    async getEpisodes() {
      this.responseAvailable = false;
      var url = "https://rickandmortyapi.com/api/episode";
      do {
        var hasNextPage = false;
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
            response.results.forEach((element) => {
              this.episodes.push(element);
            });
            hasNextPage = response.info.next != null;
            if (hasNextPage) {
              url = response.info.next;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } while (hasNextPage);
      this.records = this.episodes.filter((elem, index) => index < 10);
      this.responseAvailable = true;
    },
  },
  computed: {
    sortedRecords() {
      var array = [...this.records];

      if (this.IDToggle) {
        return array.sort((a, b) => {
          if (a.id < b.id) return -1;
          else if (a.id > b.id) return 1;
          else return 0;
        });
      } else {
        return array.sort((a, b) => {
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          else return 0;
        });
      }
    },
  },
  mounted: function() {
    this.getEpisodes();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
