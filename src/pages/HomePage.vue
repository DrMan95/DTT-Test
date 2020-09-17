<template>
  <div>
    <div id="homeComtainer">
      <h1>Welcome to my Home page</h1>
      <h3>
        These are {{ records.length }}/{{ episodes.length }} Rick & Morty
        episodes
      </h3>
      <br />
      <div>
        <div id="sortContainer">
          <b-button
            pill
            variant="outline-secondary"
            :pressed.sync="IDToggle"
            id="sortID"
            @click="SortByID"
          >Sort by episode</b-button>
          <b-button
            pill
            variant="outline-secondary"
            :pressed.sync="NameToggle"
            id="sortName"
            @click="SortByName"
          >Sort by name</b-button>
        </div>
        <div v-for="(record, index) in sortedRecords" :key="record.name">
          <Record @click="() => Show(index)" :record="record" />
        </div>
        <b-link v-if="records.length == 10" @click="ShowAll = true">Show All</b-link>
        <b-link v-else @click="ShowAll = false">Show Less</b-link>
      </div>
    </div>
  </div>
</template>

<script>
import Record from "../components/Record";

export default {
  name: "HomePage",
  components: {
    Record,
  },
  data() {
    return {
      selectedRecord: undefined,
      IDToggle: true,
      NameToggle: false,
      ShowAll: false,
    };
  },
  props: {
    allData: undefined,
  },
  methods: {
    Show(index) {
      this.selectedRecord = this.sortedRecords[index];
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
  },
  computed: {
    episodes() {
      return this.allData.episodes;
    },
    records() {
      if (this.ShowAll) {
        return this.allData.episodes;
      } else {
        return this.episodes.filter((elem, index) => index < 10);
      }
    },
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
